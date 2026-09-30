import { render } from "preact";
import { App } from "./App";
import "./index.css";

// Opt in to entrance motion before the first paint, so revealed content never
// flashes in and then disappears. useReveal() does the rest.
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.documentElement.classList.add("motion");
}

render(<App />, document.getElementById("app") as HTMLElement);