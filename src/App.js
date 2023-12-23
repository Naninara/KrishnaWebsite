import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Gallery from "./Components/Gallery";
import Corousal from "./Components/Corousal";
function App() {
  return (
    <div className="App">
      <Navbar />

      <HeroSection />

      <Corousal />
      <Gallery />
    </div>
  );
}

export default App;
