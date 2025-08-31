import "./App.css";
import Contato from "./components/Contato";
import Header from "./components/Header";
import Home from "./components/Home"; 
import NossoMetodo from "./components/NossoMetodo";
import QuemSomos from "./components/QuemSomos";
import Home from "./components/Home"; // <--- importando o novo componente
import Servicos from "./components/Servicos";
function App() {
  return (
    <div>
      {/* Navbar */}
      <Header />
      
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
