import { links } from "../data/links";
import Icon from "./Icon";
import Link from "./Link";
import Partner from "./Partner";

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="collaboration-section container section-space"
      aria-labelledby="collaboration-title"
    >
      <div className="collaboration-copy">
        <p className="eyebrow">04 / BUILT TOGETHER</p>
        <h2 id="collaboration-title">
          Bring your ideas.
          <br />
          Build what’s next.
        </h2>
        <p className="section-description">
          Have a project, an idea, or expertise to contribute? Explore
          collaboration opportunities and help improve the tools our community
          uses.
        </p>
        <div className="button-row">
          <Link href={links.collaboration} className="button button-dark">
            Explore collaboration <Icon name="external" />
          </Link>
          <Link href={links.issues} className="text-link">
            Report an issue <Icon name="external" />
          </Link>
        </div>
      </div>
      <Partner />
    </section>
  );
}
