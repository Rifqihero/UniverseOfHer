import { useState } from "react";

export default function Questions() {

  const visited =
    JSON.parse(
      localStorage.getItem("visitedPlanets")
    ) || [];

  if (!visited.includes("questions")) {
    visited.push("questions");

    localStorage.setItem(
      "visitedPlanets",
      JSON.stringify(visited)
    );
  }

  const [result, setResult] = useState("");

  const question = {
    title: "Siapa yang bilang sayang duluan?",
    answer: "Aku",
  };

  const checkAnswer = (choice) => {
    if (choice === question.answer) {
      setResult("✨ Benar!");
    } else {
      setResult("😆 Masa lupa sih?");
    }
  };

  return (
    <div className="planet-page">
      <h1>☄️ Planet Pertanyaan</h1>

      <h2>{question.title}</h2>

      <div className="memory-list">

        <button
          className="memory-star"
          onClick={() => checkAnswer("Aku")}
        >
          Aku
        </button>

        <button
          className="memory-star"
          onClick={() => checkAnswer("Kamu")}
        >
          Kamu
        </button>

        <button
          className="memory-star"
          onClick={() => checkAnswer("Bersamaan")}
        >
          Bersamaan
        </button>

      </div>

      <h2 style={{ marginTop: "30px" }}>
        {result}
      </h2>
    </div>
  );
}