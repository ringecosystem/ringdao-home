import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Application from "./components/Application";
import Technology from "./components/Technology";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

export function App() {
  return (
    <div className="flex bg-white">
      <div className="w-full sm:w-[1240px] mx-auto border-[#585858] border-[1px] border-x">
        <Header />
        <Hero />
        <About />
        <Application />
        <Technology />
        <Collaboration />
        <Footer />
      </div>
    </div>
  );
}