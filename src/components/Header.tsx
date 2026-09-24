import { useEffect, useRef, useState } from "preact/hooks";
import data from "../data/header.json";
import { links } from "../data/links";
import Icon from "./Icon";
import Link from "./Link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <a
          className="brand"
          href="#top"
          aria-label="RingDAO home"
          onClick={() => setOpen(false)}
        >
          <img src="/images/logo.svg" width="130" height="30" alt="RingDAO" />
        </a>
        <button
          className="menu-toggle"
          ref={toggle}
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          className="header-nav"
          id="main-navigation"
          aria-label="Main navigation"
          data-open={open}
        >
          {data.menu.map((item) => (
            <a key={item.url} href={item.url} onClick={() => setOpen(false)}>
              {item.name}
            </a>
          ))}
          <Link
            className="button button-dark header-cta"
            href={links.governance}
          >
            Open governance <Icon name="external" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
