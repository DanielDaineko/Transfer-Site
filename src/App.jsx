import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Routes from "./components/Routes/Routes";
import MapSection from "./components/MapSection/MapSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Routes />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
