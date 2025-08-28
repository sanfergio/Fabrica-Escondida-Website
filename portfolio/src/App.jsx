import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home"; // <--- importando o novo componente

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
