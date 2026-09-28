import { links } from "../data/links";
import GetRING from "./GetRING";
import Icon from "./Icon";
import Lines from "./Lines";
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
          <h2 id="governance-title" data-reveal>
            <Lines light={["Your voice"]} bold={["Our direction"]} />
          </h2>
          <p
            className="section-description"
            data-reveal
            style={{ "--i": 2 } as Record<string, number>}
          >
            RING is RingDAO’s governance token. Through open discussion and
            onchain governance, the community shapes how the ecosystem develops.
          </p>
          <ol className="governance-steps" data-reveal>
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
          <div
            className="button-row governance-actions"
            data-reveal
            style={{ "--i": 1 } as Record<string, number>}
          >
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
