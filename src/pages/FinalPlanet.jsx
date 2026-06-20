import { useEffect, useState } from "react";

import photo6 from "../assets/photos/photo6.JPG";
import photo7 from "../assets/photos/photo7.JPG";
import photo8 from "../assets/photos/photo8.JPG";
import photo9 from "../assets/photos/photo9.jpg";
import photo10 from "../assets/photos/photo10.jpg";
import photo11 from "../assets/photos/photo11.PNG";

export default function FinalPlanet() {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLetter(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!showLetter) {
    return (
      <div className="planet-page">
        <h1
          style={{
            fontSize: "5rem",
            animation: "pulse 2s infinite",
          }}
        >
          ❤️
        </h1>

        <h2 style={{ marginTop: "20px" }}>
          Untuk Bebe...
        </h2>

        <p
          style={{
            marginTop: "20px",
            opacity: 0.8,
          }}
        >
          Sedang membuka planet terakhir...
        </p>
      </div>
    );
  }

  return (
    <div className="planet-page">
      <div
        style={{
          maxWidth: "850px",
          textAlign: "left",
          lineHeight: "2",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          ❤️ Planet Terakhir
        </h1>

        <h2>Untuk Bebe ❤️</h2>

        <br />

        <p>Kalau dipikir-pikir, lucu juga ya.</p>

        <p>
          Awalnya aku cuma lihat kamu pas perkenalan di kantor.
        </p>

        <p>
          Belum kenal. Belum ngobrol. Belum tahu apa-apa tentang kamu.
        </p>

        <p>
          Tapi entah kenapa langsung nyangkut aja.
        </p>

        <br />

        <p>
          Terus mulailah masa-masa curi pandang profesional.
        </p>

        <p>
          Pura-pura fokus kerja.
        </p>

        <p>
          Padahal aslinya nyari kamu.
        </p>

        <br />

        <p>
          Aku masih ingat waktu MU kalah dan kamu malah ikut-ikutan ngeledekin aku.
        </p>

        <p>Menyebalkan sih.</p>

        <p>
          Tapi mungkin dari situ semuanya mulai terasa berbeda.
        </p>

        <br />

        <p>
          Waktu itu aku tahu kamu masih punya pasangan.
        </p>

        <p>
          Jadi aku memilih menikmati semuanya dari jauh aja.
        </p>

        <p>Nggak mau ganggu.</p>

        <br />

        <p>
          Sampai akhirnya kita mulai ngobrol lebih sering.
        </p>

        <p>Lebih lama.</p>

        <p>Lebih dekat.</p>

        <br />

        <p>
          Dan aku sadar kalau aku selalu menunggu chat dari kamu.
        </p>

        <br />

        <p>
          Ada banyak hal yang aku suka dari kamu.
        </p>

        <p>Recehmu.</p>

        <p>Asbunmu.</p>

        <p>Randommu.</p>

        <p>
          Dan semua hal kecil yang bikin kamu jadi kamu.
        </p>

        <br />

        <p>
          Termasuk kebiasaan mainin idung sendiri.
        </p>

        <p>
          Dan kalau lagi boncengan suka gede-gedein napas biar perutnya nempel ke punggung aku.
        </p>

        <p>
          Aku nggak tahu itu sengaja atau nggak.
        </p>

        <p>
          Tapi aku selalu senyum kalau ingat itu.
        </p>

        <br />

        <p>
          Dari semua hal yang terjadi...
        </p>

        <p>
          Hal yang paling aku syukuri adalah aku pernah bertemu kamu.
        </p>

        <br />

        <h2
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Selamat ulang tahun ya, Sayang 🎂❤️
        </h2>

        <br />

        <p style={{ textAlign: "center" }}>
          Mungkin website ini nggak sempurna.
        </p>

        <p style={{ textAlign: "center" }}>
          Masih ada bug.
        </p>

        <p style={{ textAlign: "center" }}>
          Masih ada bagian yang berantakan.
        </p>

        <br />

        <p style={{ textAlign: "center" }}>
          Tapi pembuatnya juga begitu.
        </p>

        <br />

        <h2
          style={{
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          📸 Beberapa Momen Favoritku Bersama Kamu
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[photo6, photo7, photo8, photo9, photo10, photo11].map(
            (photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`memory-${index}`}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                }}
              />
            )
          )}
        </div>
                <div
          style={{
            textAlign: "center",
            marginTop: "120px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src={photo8}
            alt="favorite"
            style={{
              width: "100%",
              borderRadius: "24px",
              marginBottom: "40px",
            }}
          />

          <h2>❤️ Foto Favoritku</h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "2",
              opacity: 0.9,
            }}
          >
            Dari semua foto yang ada,
            entah kenapa aku selalu kembali ke foto ini.
          </p>

          <div
            style={{
              marginTop: "80px",
              lineHeight: "2.3",
            }}
          >
            <p>23 Agustus 2025</p>

            <br />

            <p>Hari dimana semuanya dimulai.</p>

            <br />

            <p>
              Kalau dipikir-pikir, lucu juga ya.
            </p>

            <p>
              Semua ini berawal dari seseorang yang cuma bisa curi pandang dari jauh.
            </p>

            <br />

            <p>
              Seseorang yang sengaja berangkat lebih pagi,
              berharap bisa nyapa kamu.
            </p>

            <p>
              Tapi malah diam karena malu.
            </p>

            <br />

            <p>
              Dan sekarang aku ada di sini.
            </p>

            <p>
              Menulis semua ini.
            </p>

            <p>
              Untuk kamu.
            </p>

            <br />

            <p>
              Terima kasih sudah hadir.
            </p>

            <p>
              Terima kasih sudah bertahan.
            </p>

            <p>
              Terima kasih sudah menjadi bagian
              dari cerita terbaik dalam hidupku.
            </p>

            <br />

            <h1>❤️</h1>

            <h2
              style={{
                marginTop: "20px",
              }}
            >
              Universe Of Her
            </h2>

            <p
              style={{
                marginTop: "30px",
                opacity: 0.8,
              }}
            >
              — Rifqi
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}