import { useState } from "react";

export default function Secret() {
  const visited =
    JSON.parse(
      localStorage.getItem("visitedPlanets")
    ) || [];

  if (!visited.includes("secret")) {
    visited.push("secret");

    localStorage.setItem(
      "visitedPlanets",
      JSON.stringify(visited)
    );
  }

  const [selected, setSelected] = useState(null);

  const secrets = [
    {
      title: "🤫 Sebuah Pengakuan",
      text:
        "Aku nggak pernah cerita ini, tapi waktu awal-awal suka sama kamu aku sering berharap bisa ketemu kamu di kantor. Bahkan kadang sengaja cari alasan biar bisa lewat dekat meja kamu.",
    },

    {
      title: "😆 Hal Yang Masih Aku Ingat",
      text:
        "Aku masih nggak habis pikir kenapa ada orang yang bisa mainin idung sendiri sesering itu. Tapi anehnya, justru hal-hal random kayak gitu yang bikin aku makin sayang sama kamu.",
    },

    {
      title: "❤️ Hal Yang Aku Suka Dari Kamu",
      text:
        "Aku suka karena aku nggak pernah capek ngobrol sama kamu. Mau ngobrol penting, receh, asbun, atau nggak jelas sama sekali, semuanya tetap seru.",
    },

    {
      title: "🚀 Terima Kasih",
      text:
        "Terima kasih sudah hadir di hidup aku. Terima kasih sudah menjadi tempat pulang setelah hari-hari yang kadang bikin capek dan pusing.",
    },

    {
      title: "🌙 Rahasia Terbesar",
      text:
        "Kalau ditanya kenapa aku bikin website ini, jawabannya simpel. Karena aku pengen bikin sesuatu yang spesial buat orang yang spesial. Dan aku belum pernah melakukan hal seperti ini untuk siapa pun sebelumnya.",
    },
  ];

  return (
    <div className="planet-page">
      <h1>🪐 Planet Rahasia</h1>

      <div className="memory-list">
        {secrets.map((secret) => (
          <button
            key={secret.title}
            className="memory-star"
            onClick={() => setSelected(secret)}
          >
            {secret.title}
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="memory-popup"
          onClick={() => setSelected(null)}
        >
          <div
            className="memory-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selected.title}</h2>

            <p>{selected.text}</p>

            <button
              onClick={() => setSelected(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}