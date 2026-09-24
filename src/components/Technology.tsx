import { links } from "../data/links";
import Icon from "./Icon";
import Link from "./Link";

const projects = [
  {
    name: "Darwinia",
    category: "NETWORK",
    description: "An EVM-compatible network where the RingDAO ecosystem began.",
    href: links.darwinia,
    logo: "/images/darwinia.svg",
    logoClass: "darwinia-logo",
  },
  {
    name: "Darwinia Bridge",
    category: "BRIDGE",
    description: "An interface for cross-chain asset transfers.",
    href: links.bridge,
  },
  {
    name: "Msgport",
    category: "MESSAGING",
    description: "Programmable messaging between applications across chains.",
    href: links.msgport,
    logo: "/images/msgport.svg",
    logoClass: "msgport-logo",
  },
  {
    name: "XAPI",
    category: "ORACLES",
    description: "An open-source project for programmable cross-chain oracles.",
    href: links.xapi,
    logo: "/images/xapi.svg",
    logoClass: "xapi-logo",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="ecosystem-section container section-space"
      aria-labelledby="ecosystem-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / THE WIDER ECOSYSTEM</p>
          <h2 id="ecosystem-title">
            Different tools.
            <br />
            Shared roots.
          </h2>
        </div>
        <p>
          Explore the networks and tools
          <br className="desktop-break" /> connected to RingDAO.
        </p>
      </div>
      <div className="ecosystem-grid">
        {projects.map((project) => (
          <Link
            key={project.name}
            className="ecosystem-card"
            href={project.href}
            label={`Explore ${project.name}`}
          >
            <div className="ecosystem-card-top">
              <span
                className={`project-logo ${project.logoClass || "bridge-logo"}`}
              >
                {project.logo ? (
                  <img src={project.logo} alt="" loading="lazy" />
                ) : (
                  <Icon name="bridge" />
                )}
              </span>
              <Icon name="external" />
            </div>
            <span className="project-category">{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
