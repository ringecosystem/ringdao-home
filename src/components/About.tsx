import { links } from "../data/links";
import GetRING from "./GetRING";
import Icon from "./Icon";
import Link from "./Link";

export default function About() {
  return (
    <section
      id="about"
      className="governance-section"
      aria-labelledby="governance-title"
    >
      <div className="container governance-grid section-space">
        <div className="governance-copy">
          <p className="eyebrow">03 / RING & GOVERNANCE</p>
          <h2 id="governance-title">
            Your voice.
            <br />
            Our direction.
          </h2>
          <p className="section-description">
            RING is RingDAO’s governance token. Through open discussion and
            onchain governance, the community shapes how the ecosystem develops.
          </p>
          <ol className="governance-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Start a conversation</h3>
                <p>Share ideas and discuss the ecosystem’s priorities.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Explore the proposals</h3>
                <p>Understand what’s being proposed and why it matters.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Take part in governance</h3>
                <p>Participate through delegation and voting.</p>
              </div>
            </li>
          </ol>
          <div className="button-row governance-actions">
            <Link href={links.governance} className="button button-dark">
              Open governance <Icon name="external" />
            </Link>
            <Link href={links.discussion} className="text-link">
              Join the discussion <Icon name="external" />
            </Link>
          </div>
        </div>
        <GetRING />
      </div>
    </section>
  );
}
