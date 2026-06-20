import { useState } from "react";

import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";

export default function Memories() {
  const visited =
    JSON.parse(
      localStorage.getItem("visitedPlanets")
    ) || [];

  if (!visited.includes("memories")) {
    visited.push("memories");

    localStorage.setItem(
      "visitedPlanets",
      JSON.stringify(visited)
    );
  }

  const [selected, setSelected] = useState(null);

  const memories = [
    {
      title: "⭐ Momen Pertama Kali Aku Lihat Kamu",
      image: photo1,
      text:
        "Pertama kali aku lihat kamu pas perkenalan di kantor. Jujur aja, waktu itu aku langsung tertarik. Nggak tahu kenapa, rasanya kayak ada suara di kepala yang bilang, 'kayaknya aku suka sama anak ini deh'. Padahal belum kenal, belum ngobrol, belum tahu kamu seperti apa. Makanya sampai sekarang kalau diingat lagi rasanya aneh, tapi lucu juga.",
    },

    {
      title: "⭐ Curi Pandang",
      image: photo2,
      text:
        "Karena meja kita nggak terlalu jauh, aku jadi sering lihat ke arah kamu. Kadang pura-pura lagi mikir, kadang pura-pura lagi lihat sekitar. Padahal sebenarnya cuma penasaran kamu lagi ngapain. Untung waktu itu nggak ketahuan terlalu sering.",
    },

    {
      title: "⭐ Ternyata Aku Belum Tahu",
      image: photo3,
      text:
        "Waktu mulai sering memperhatikan kamu, aku bahkan belum tahu kalau ternyata kamu sudah punya pasangan. Jadi semuanya berjalan biasa aja. Aku cuma menikmati momen-momen kecil bisa lihat, ngobrol, dan mengenal kamu sedikit demi sedikit.",
    },

    {
      title: "⭐ Berangkat Lebih Pagi",
      image: photo4,
      text:
        "Kalau dipikir sekarang lucu juga. Pernah beberapa kali sengaja berangkat lebih pagi cuma karena berharap bisa ketemu dan nyapa kamu. Tapi kalau pas ada orang lain di sekitar kamu, malah nggak jadi nyapa karena malu. Akhirnya cuma lewat, terus nyesel sendiri. Besoknya diulang lagi.",
    },

    {
      title: "⭐ Kenapa Aku Nyaman",
      image: photo5,
      text:
        "Salah satu hal yang paling aku suka dari kamu adalah semuanya terasa gampang. Tingkahmu masuk. Recehmu masuk. Asbunmu juga masuk. Rasanya nggak pernah harus mikir keras buat jadi diri sendiri kalau lagi sama kamu. Dan mungkin itu yang bikin semuanya terasa spesial.",
    },
  ];

  return (
    <div className="planet-page">
      <h1>🌙 Planet Kenangan</h1>

      <div className="memory-list">
        {memories.map((memory) => (
          <button
            key={memory.title}
            className="memory-star"
            onClick={() => setSelected(memory)}
          >
            {memory.title}
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
            <img
              src={selected.image}
              alt={selected.title}
              className="memory-image"
            />

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