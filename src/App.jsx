import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSwiper from "./components/PageSwiper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSwiper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
