import React from "react";
import "../styles/songs.css";

// On importe les images
import alb1 from "../assets/images/Log.jpeg";
import alb2 from "../assets/images/album2.jpeg";
import alb3 from "../assets/images/album3.jpeg";

const albums = [
  {
    id: 1,
    title: "Monumental",
    cover: alb1,
    platforms: [
      { name: "Spotify", link: "https://open.spotify.com/intl-fr/artist/569gJ4EfApQjTdfFOAwk5x" },
      { name: "YouTube", link: "https://youtube.com/@airmut21?si=ftToPrQ2C9Zyrp6y" },
      { name: "Apple Music", link: "https://music.apple.com/fr/artist/airmut/1827542266" },
    ],
  },
  {
    id: 2,
    title: "Chretiens Partout",
    cover: alb2,
    platforms: [
      { name: "Spotify", link: "https://open.spotify.com/intl-fr/artist/569gJ4EfApQjTdfFOAwk5x" },
      { name: "YouTube", link: "https://youtube.com/@airmut21?si=ftToPrQ2C9Zyrp6y" },
      { name: "Apple Music", link: "https://music.apple.com/fr/artist/airmut/1827542266" },
    ],
  },
  {
    id: 3,
    title: "Gardienne",
    cover: alb3,
    platforms: [
      { name: "Spotify", link: "https://open.spotify.com/intl-fr/artist/569gJ4EfApQjTdfFOAwk5x" },
      { name: "YouTube", link: "https://youtube.com/@airmut21?si=ftToPrQ2C9Zyrp6y" },
      { name: "Apple Music", link: "https://music.apple.com/fr/artist/airmut/1827542266" },
    ],
  },
];

const Songs = () => {
  return (
    <section id="songs" className="songs-section">
      <h2>Nos Chansons</h2>
      <div className="albums-container">
        {albums.map((album) => (
          <div className="album-card" key={album.id}>
            <div className="album-inner">
              <div className="album-front">
                <img src={album.cover} alt={album.title} />
                <h3>{album.title}</h3>
              </div>
              <div className="album-back">
                <h3>Écoutez sur :</h3>
                {album.platforms.map((p, i) => (
                  <a href={p.link} target="_blank" rel="noreferrer" key={i}>
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Songs;
