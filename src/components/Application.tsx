import { links } from "../data/links";
import Icon from "./Icon";
import Link from "./Link";

export default function Application() {
  return (
    <section
      id="application"
      className="featured-section container section-space"
      aria-labelledby="degov-title"
    >
      <div className="section-kicker">
        <span>01 / OUR CURRENT FOCUS</span>
        <span>FEATURED APPLICATION</span>
      </div>
      <div className="featured-panel">
        <div className="featured-heading">
          <div>
            <div className="degov-brand">
              <img src="/images/degov.svg" alt="" width="34" height="34" />
              <span>DeGov AI</span>
              <span className="featured-tag">GOVERNANCE, EVOLVED</span>
            </div>
            <h2 id="degov-title">
              Run your DAO.
              <br />
              <span>Understand its decisions.</span>
            </h2>
          </div>
          <div className="featured-intro">
            <p>
              Tools for onchain governance. Data to understand the decisions
              behind it. Built for communities, researchers, and AI agents.
            </p>
            <Link href={links.degov} className="button button-lime">
              Discover DeGov AI <Icon name="external" />
            </Link>
          </div>
        </div>
        <div className="product-grid">
          <article className="product-card">
            <div className="product-card-top">
              <Icon name="square" />
              <span>01 — PARTICIPATE</span>
            </div>
            <h3>Square</h3>
            <p>
              Give your DAO an open-source home for proposals, delegation,
              voting, and onchain execution.
            </p>
            <Link href={links.square} className="product-link">
              Open Square <Icon name="external" />
            </Link>
          </article>
          <article className="product-card">
            <div className="product-card-top">
              <Icon name="atlas" />
              <span>02 — UNDERSTAND</span>
            </div>
            <h3>Atlas</h3>
            <p>
              Explore proposals, votes, and discussions across DAOs. Follow the
              context around each decision.
            </p>
            <Link href={links.atlas} className="product-link">
              Explore Atlas <Icon name="external" />
            </Link>
          </article>
          <article className="product-card">
            <div className="product-card-top">
              <Icon name="code" />
              <span>03 — BUILD</span>
            </div>
            <h3>Agent API & Skills</h3>
            <p>
              Bring governance data into AI workflows, with skills for research
              and proposal security analysis grounded in sources.
            </p>
            <div className="agent-links">
              <Link href={links.api} className="product-link">
                Explore the API <Icon name="external" />
              </Link>
              <Link href={links.skills} className="skills-link">
                Get skills <Icon name="external" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
