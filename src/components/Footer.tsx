import { links } from "../data/links";
import Icon from "./Icon";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <a className="brand" href="#top" aria-label="RingDAO home">
              <img
                src="/images/logo.svg"
                alt="RingDAO"
                width="130"
                height="30"
              />
            </a>
            <p>
              An ecosystem shaped
              <br />
              by its community.
            </p>
          </div>
          <div className="footer-connect">
            <span className="eyebrow">STAY IN THE CONVERSATION</span>
            <nav className="social-links" aria-label="RingDAO community">
              <Link href={links.x}>
                X <Icon name="external" />
              </Link>
              <Link href={links.telegram}>
                Telegram <Icon name="external" />
              </Link>
              <Link href={links.discord}>
                Discord <Icon name="external" />
              </Link>
              <Link href={links.github}>
                GitHub <Icon name="external" />
              </Link>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RingDAO</span>
          <span>Open discussion. Shared direction.</span>
          <a href="#top">
            Back to top <Icon name="down" />
          </a>
        </div>
      </div>
    </footer>
  );
}
