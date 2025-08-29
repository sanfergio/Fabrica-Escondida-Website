import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home"; 
import QuemSomos from "./components/QuemSomos";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Header />

      {/* Home */}
      <QuemSomos />
    </div>
  );
}

export default App;
