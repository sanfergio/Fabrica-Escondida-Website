import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home"; 
import NossoMetodo from "./components/NossoMetodo";
import QuemSomos from "./components/QuemSomos";

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
