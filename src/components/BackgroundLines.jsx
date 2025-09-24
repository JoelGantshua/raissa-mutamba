// src/components/BackgroundLines.jsx
import React, { useRef, useEffect } from "react";

/**
 * BackgroundLines
 * - Aucun package externe requis
 * - Dessine des points et lignes entre eux (toile)
 * - Réagit à la souris (repulse)
 * - Utilise les variables CSS (--riC*) si elles existent
 */
export default function BackgroundLines({ count = 60 }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const mouse = useRef({ x: null, y: null, r: 120 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // get palette from CSS vars (fallback values)
    const css = getComputedStyle(document.documentElement);
    const c1 = css.getPropertyValue("--riC1").trim() || "#3D4D55";
    const c2 = css.getPropertyValue("--riC4").trim() || "#B58863";
    const c3 = css.getPropertyValue("--riC6").trim() || "#10332A";
    const linkColor = css.getPropertyValue("--riC5").trim() || "#161616";

    // DPR handling
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      // reset transform and scale once per resize
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    // initialize particles
    particlesRef.current = [];
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.2 + 0.6,
        color: i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3,
      });
    }

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // draw connections
      const threshold = Math.min(160, Math.max(80, 120)); // auto threshold
      const pts = particlesRef.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < threshold) {
            const alpha = (1 - dist / threshold) * 0.45;
            ctx.strokeStyle = `rgba( ${hexToRgbString(linkColor)} , ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw particles & update physics
      for (let p of pts) {
        // move
        p.x += p.vx;
        p.y += p.vy;

        // bounce edges
        if (p.x <= 0 || p.x >= w) p.vx *= -1;
        if (p.y <= 0 || p.y >= h) p.vy *= -1;

        // mouse repulse
        if (mouse.current.x !== null) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < mouse.current.r && d > 0) {
            const force = (mouse.current.r - d) / mouse.current.r;
            const ang = Math.atan2(dy, dx);
            p.vx += Math.cos(ang) * force * 0.6;
            p.vy += Math.sin(ang) * force * 0.6;
          }
        }

        // slight friction
        p.vx *= 0.995;
        p.vy *= 0.995;

        // draw circle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animate() {
      draw();
      animRef.current = requestAnimationFrame(animate);
    }
    animRef.current = requestAnimationFrame(animate);

    // events
    function onMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    function onLeave() {
      mouse.current.x = null;
      mouse.current.y = null;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", resize);

    // pause when tab hidden to save CPU
    function onVisibility() {
      if (document.hidden) cancelAnimationFrame(animRef.current);
      else animRef.current = requestAnimationFrame(animate);
    }
    document.addEventListener("visibilitychange", onVisibility);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(animRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      id="background-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}

/* helper: convert e.g. '#3D4D55' -> '61,77,85' */
function hexToRgbString(hex) {
  if (!hex) return "0,0,0";
  const h = hex.replace("#", "").trim();
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return `${r},${g},${b}`;
  }
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `${r},${g},${b}`;
}
