import { useEffect } from "preact/hooks";

// Adds `is-in` to every [data-reveal] element the first time it scrolls into
// view. Styles live in index.css under `.motion`, so without JS (or with
// reduced motion) everything is simply visible.
export function useReveal() {
  useEffect(() => {
    // main.tsx sets `.motion` before the first paint when motion is allowed.
    if (!document.documentElement.classList.contains("motion")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target;
          target.classList.add("is-in");
          observer.unobserve(target);
          window.setTimeout(() => target.classList.add("is-done"), 1600);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
