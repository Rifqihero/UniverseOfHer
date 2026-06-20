import { useState } from "react";

export default function Hopes() {

  const visited =
    JSON.parse(
      localStorage.getItem("visitedPlanets")
    ) || [];

  if (!visited.includes("hopes")) {
    visited.push("hopes");

    localStorage.setItem(
      "visitedPlanets",
      JSON.stringify(visited)
    );
  }

  const [message, setMessage] = useState("");

  const hopes = [
    {
      title: "✈️ Perjalanan Berikutnya",
      message:
        "Aku berharap masih ada banyak perjalanan yang bisa kita lakukan bareng. Mau dekat atau jauh, selama sama kamu rasanya tetap menyenangkan.",
    },

    {
      title: "🏡 Cerita Yang Belum Selesai",
      message:
        "Aku berharap cerita kita masih panjang. Masih banyak hal yang belum kita coba, belum kita lihat, dan belum kita rayakan bersama.",
    },

    {
      title: "🌟 Untuk Kamu",
      message:
        "Aku berharap kamu selalu sehat, selalu bahagia, dan semua hal baik yang kamu impikan bisa pelan-pelan terwujud.",
    },

    {
      title: "❤️ Harapan Terbesar",
      message:
        "Dan kalau boleh egois sedikit, aku berharap aku masih bisa menjadi bagian dari cerita bahagia kamu untuk waktu yang sangat lama.",
    },
  ];

  return (
    <div className="planet-page">
      <h1>💫 Planet Harapan</h1>

      <div className="memory-list">
        {hopes.map((hope) => (
          <button
            key={hope.title}
            className="memory-star"
            onClick={() => setMessage(hope.message)}
          >
            {hope.title}
          </button>
        ))}
      </div>

      {message && (
        <div
          style={{
            marginTop: "30px",
            maxWidth: "600px",
            lineHeight: "1.8",
          }}
        >
          ❤️ {message}
        </div>
      )}
    </div>
  );
}