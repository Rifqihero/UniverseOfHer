import { useNavigate } from "react-router-dom";

export default function GalaxyMap() {
  const navigate = useNavigate();

  const visited = JSON.parse(
    localStorage.getItem("visitedPlanets")
  ) || [];

  const progress = visited.length;

  const unlocked = progress >= 4;

  return (
    <div className="galaxy-map">
      <div className="progress">
        ✨ {progress} / 4 Planet Dijelajahi
      </div>

      <h1 className="galaxy-title">
        Universe Of Her 🌌
      </h1>

      <div className="space">

        <div
          className="planet memory"
          onClick={() => navigate("/memories")}
        >
          🌙
        </div>

        <div
          className="planet secret"
          onClick={() => navigate("/secret")}
        >
          🪐
        </div>

        <div
          className="planet question"
          onClick={() => navigate("/questions")}
        >
          ☄️
        </div>

        <div
          className="planet hope"
          onClick={() => navigate("/hopes")}
        >
          💫
        </div>

        {unlocked ? (
          <div
            className="planet hope"
            onClick={() => navigate("/final")}
          >
            ❤️
          </div>
        ) : (
          <div className="planet locked">
            ❤️
          </div>
        )}

      </div>
    </div>
  );
}