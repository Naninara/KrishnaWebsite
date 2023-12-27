import "./App.css";

import React, { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "./Components/ErrorBoundaryFallBack";
import Loader from "./Components/Loader";
const HeroSection = React.lazy(() => import("./Components/HeroSection"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Footer = React.lazy(() => import("./Components/Footer"));

const Gallery = React.lazy(() => import("./Components/Gallery"));
const Corousal = React.lazy(() => import("./Components/Corousal"));

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        fallback={<ErrorBoundaryFallBack />}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense fallback={<Loader />}>
          <Navbar />

          <HeroSection />

          <Corousal />
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>

          <Contact />

          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
