import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home"; // <--- importando o novo componente
import NossaHistoria from "./components/NossaHistoria";

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
