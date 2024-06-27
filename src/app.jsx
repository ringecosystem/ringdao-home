import Header from "./components/Header";
import Hero from "./components/Hero";
import EmpoweringChains from "./components/EmpoweringChains";
import websitesData from "./data/websites.json";
import WebSites from "./components/WebSites";
import Footer from "./components/Footer";

export function App() {
  return (
    <div className="flex 3xl:justify-end 2xl:pl-[20px] 3xl:pl-[290px] 4xl:pl-[670px]">
      {window.innerWidth >= 1000 && window.innerWidth < 1440 && (
        <>
          <img
            src="/images/1000bg1.png"
            className="absolute left-[-10%] top-[-5%] -z-50"
          />
          <img
            src="/images/1000bg2.png"
            className="absolute right-0 top-[125%] -z-50"
          />
        </>
      )}
      {window.innerWidth >= 1440 && window.innerWidth < 1920 && (
        <>
          <img
            src="/images/1440bg1.png"
            className="absolute left-[0] top-[0] z-[60]"
          />
          <img
            src="/images/1440bg2.png"
            className="absolute right-0 top-[40%] -z-50 "
          />
        </>
      )}
      {window.innerWidth >= 1920 && window.innerWidth < 2560 && (
        <>
          <img
            src="/images/1920bg1.png"
            className=" absolute right-0 top-[30%] z-50 "
          />
          <img
            src="/images/1920bg2.png"
            className="absolute left-[10%] top-[0] z-[60]"
          />
          <img
            src="/images/1920bg3.png"
            className="absolute left-[10%] top-[140%] z-50"
          />
        </>
      )}
      {window.innerWidth >= 2560 && (
        <>
          <img
            src="/images/2560bg1.png"
            className="absolute left-[23%] top-[0] z-[60]"
          />
          <img
            src="/images/2560bg2.png"
            className="absolute right-[0.1%] top-[25%] -z-50"
          />
        </>
      )}

      <Hero className="hidden 2xl:block" />
      <div className="sm:px-[100px]">
        <Header />
        <Hero className="block 2xl:hidden" />
        <EmpoweringChains />
        {websitesData.sites.map((item) => {
          return (
            <WebSites
              logo={item.logo}
              desc={item.desc}
              isxapi={item.isxapi}
              alt={item.alt}
              link={item.link}
            />
          );
        })}
        <Footer />
      </div>
    </div>
  );
}
