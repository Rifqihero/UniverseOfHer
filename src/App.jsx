import { BrowserRouter, Routes, Route } from "react-router-dom";

import Opening from "./pages/Opening";
import GalaxyMap from "./pages/GalaxyMap";
import Memories from "./pages/Memories";
import Secret from "./pages/Secret";
import Questions from "./pages/Questions";
import Hopes from "./pages/Hopes";
import FinalPlanet from "./pages/FinalPlanet";

import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <BrowserRouter>

      <MusicPlayer />

      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/galaxy" element={<GalaxyMap />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/hopes" element={<Hopes />} />
        <Route path="/final" element={<FinalPlanet />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;