import { links } from "../data/links";
import Icon from "./Icon";
import Lines from "./Lines";
import Link from "./Link";
import Orbit from "./Orbit";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <h1 id="hero-title" data-reveal>
            <Lines
              light={["An ecosystem", "governed by"]}
              bold={["its community."]}
            />
          </h1>
          <p
            className="hero-description"
            data-reveal
            style={{ "--i": 4 } as Record<string, number>}
          >
            RingDAO brings RING holders and contributors together to support
            DeFi and DAO applications. Rooted in Darwinia. Shaped by the people
            building what comes next.
          </p>
          <div
            className="button-row"
            data-reveal
            style={{ "--i": 5 } as Record<string, number>}
          >
            <Link className="button button-dark" href={links.degov}>
              Explore DeGov AI <Icon name="external" />
            </Link>
            <a className="text-link" href="#about">
              Participate in governance <Icon name="arrow" />
            </a>
          </div>
        </div>
        <Orbit />
      </div>
    </section>
  );
}
