import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import music1 from "../assets/music/music1.mp3";
import music2 from "../assets/music/music2.mp3";

export default function MusicPlayer() {
  const location = useLocation();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(music1);

    audio.loop = true;
    audio.volume = 0.15;

    audioRef.current = audio;

    const startMusic = () => {
      audio.play().catch(() => {});
    };

    document.addEventListener("click", startMusic, {
      once: true,
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const targetMusic =
      location.pathname === "/final"
        ? music2
        : music1;

    if (audio.src.includes(targetMusic.split("/").pop()))
      return;

    const fadeOut = setInterval(() => {
      if (audio.volume > 0.02) {
        audio.volume -= 0.02;
      } else {
        clearInterval(fadeOut);

        audio.pause();

        audio.src = targetMusic;
        audio.load();

        audio.volume = 0;

        audio.play().catch(() => {});

        const fadeIn = setInterval(() => {
          if (audio.volume < 0.15) {
            audio.volume += 0.02;
          } else {
            audio.volume = 0.15;
            clearInterval(fadeIn);
          }
        }, 100);
      }
    }, 100);
  }, [location.pathname]);

  return null;
}