import { links } from "../data/links";
import Icon from "./Icon";
import Link from "./Link";

export default function Partner() {
  return (
    <div className="community" id="partner">
      <p className="eyebrow">COMMUNITY DAOS</p>
      <Link href={links.kton} className="community-link">
        <span className="community-logo">
          <img
            src="/images/ktondao.svg"
            alt=""
            width="44"
            height="36"
            loading="lazy"
          />
        </span>
        <span className="community-info">
          <strong>KtonDAO</strong>
          <span>A DAO governed by KTON token holders.</span>
        </span>
        <Icon name="external" />
      </Link>
      <Link href={links.guild} className="community-link">
        <span className="community-logo">
          <Icon name="community" />
        </span>
        <span className="community-info">
          <strong>RingDAO Community Guild</strong>
          <span>Community contributions to the RingDAO ecosystem.</span>
        </span>
        <Icon name="external" />
      </Link>
    </div>
  );
}
