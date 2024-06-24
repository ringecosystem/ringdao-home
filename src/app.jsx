import { useState } from "preact/hooks";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EmpoweringChains from "./components/EmpoweringChains";
import websitesData from "./data/websites.json";
import WebSites from "./components/WebSites";
import Footer from "./components/Footer";

export function App() {
  return (
    <div className="sm:px-[100px]">
      <Header />
      <Hero />
      <EmpoweringChains />
      {websitesData.sites.map((item) => {
        return (
          <WebSites
            logo={item.logo}
            desc={item.desc}
            isxapi={item.isxapi}
            alt={item.alt}
          />
        );
      })}
      <Footer />
    </div>
  );
}
