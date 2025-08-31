// App.js
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/PageSlider"; // Slider com setas e swipe

// Import das páginas
import Home from "./components/Home";
import QuemSomos from "./components/QuemSomos";
import NossoMetodo from "./components/NossoMetodo";
import NossaHistoria from "./components/NossaHistoria";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";

function App() {
  return (
    <Router>
      <Header />
      <Slider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/nossa-historia" element={<NossaHistoria />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/metodo" element={<NossoMetodo />} />
          <Route path="/clientes" element={<h1>Clientes</h1>} /> {/* provisório */}
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Slider>
    </Router>
  );
}

export default App;
