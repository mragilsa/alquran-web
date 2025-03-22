import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailSurahPage from "./pages/DetailSurahPage";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/surah/:surahId" element={<DetailSurahPage />} />
      </Routes>
    </div>
  );
}

export default App;
