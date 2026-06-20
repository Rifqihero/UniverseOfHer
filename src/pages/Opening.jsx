import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Opening() {
  const navigate = useNavigate();

  return (
    <div className="opening">

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
      >
        Di antara miliaran bintang...
      </motion.p>

      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 1.5,
        }}
      >
        Ada satu orang yang mengubah hidupku.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 4,
          duration: 1,
        }}
      >
        Namanya...
      </motion.h2>

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 5.5,
          duration: 1.2,
        }}
        style={{
          color: "#ff8dc7",
          textShadow:
            "0 0 20px #ff8dc7",
        }}
      >
        Hanny Putri Permata Sari ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 7,
          duration: 1,
        }}
        style={{
          maxWidth: "700px",
          lineHeight: "1.8",
        }}
      >
        Mungkin ulang tahunmu sudah lewat.
        Tapi aku tetap ingin memberikan sesuatu.
        Sesuatu yang belum pernah aku buat sebelumnya.
      </motion.p>

      <motion.button
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 9,
          duration: 1,
        }}
        onClick={() => navigate("/galaxy")}
      >
        ❤️ Mulai Perjalanan
      </motion.button>

    </div>
  );
}