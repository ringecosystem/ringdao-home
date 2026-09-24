import Header from "./components/Header";
import Hero from "./components/Hero";
import Application from "./components/Application";
import Technology from "./components/Technology";
import About from "./components/About";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

export function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Application />
        <Technology />
        <About />
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}
