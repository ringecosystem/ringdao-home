import { links } from "../data/links";
import Icon from "./Icon";
import Link from "./Link";
import Orbit from "./Orbit";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <h1 id="hero-title">
            An ecosystem
            <br />
            governed by
            <br />
            <span>its community.</span>
          </h1>
          <p className="hero-description">
            RingDAO brings RING holders and contributors together to support
            DeFi and DAO applications. Rooted in Darwinia. Shaped by the people
            building what comes next.
          </p>
          <div className="button-row">
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
