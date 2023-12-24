import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Gallery from "./Components/Gallery";
import Corousal from "./Components/Corousal";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Corousal />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
