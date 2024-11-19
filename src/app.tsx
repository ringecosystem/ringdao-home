import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Program from "./components/program";
import Project from "./components/project";
import useWidth from "./hooks/useWidth";

export function App() {
  const width = useWidth();
  return (
    <div className="flex bg-white">
      <div className="w-[1240px] mx-auto border-[#585858] border-[1px] border-x">
        <Header />
        <Hero />
        <About />
        <Project />
        <Program />
        <Footer />
      </div>
    </div>
  );
}
