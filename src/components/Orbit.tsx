import { useEffect, useRef } from "preact/hooks";

// A wireframe torus: many contributions forming one ring. It turns slowly
// around its own axis, like the ring on the original site.
function project(u: number, v: number) {
  const x = (138 + 57 * Math.cos(v)) * Math.cos(u);
  const y = (138 + 57 * Math.cos(v)) * Math.sin(u);
  const z = 57 * Math.sin(v);
  const tiltedY = y * Math.cos(0.86) - z * Math.sin(0.86);
  const tiltedZ = y * Math.sin(0.86) + z * Math.cos(0.86);
  return [260 + x * Math.cos(-0.3) + tiltedZ * Math.sin(-0.3), 254 + tiltedY];
}

function ringPath(fixed: number, meridian: boolean) {
  return (
    Array.from({ length: 81 }, (_, index) => {
      const angle = (index / 80) * Math.PI * 2;
      const [x, y] = project(
        meridian ? fixed : angle,
        meridian ? angle : fixed,
      );
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(" ") + "Z"
  );
}

const MERIDIANS = 32;
const meridianAngle = (i: number, phase = 0) =>
  ((i + 0.5) / MERIDIANS) * Math.PI * 2 + phase;
const meridians = Array.from({ length: MERIDIANS }, (_, i) =>
  ringPath(meridianAngle(i), true),
);
const parallels = Array.from({ length: 8 }, (_, i) =>
  ringPath((i / 8) * Math.PI * 2, false),
);

// One meridian spacing every ~4.5s: calm, but clearly alive.
const SPIN = (Math.PI * 2) / MERIDIANS / 4.5;
// The accent dot travels the dashed orbit once a minute.
const DOT_SPIN = (Math.PI * 2) / 60;
const DOT_START = 0.7;

export default function Orbit() {
  const art = useRef<HTMLDivElement>(null);
  const meridianGroup = useRef<SVGGElement>(null);
  const dot = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const group = meridianGroup.current;
    if (reduce.matches || !group || !art.current) return;

    const paths = Array.from(group.children) as SVGPathElement[];
    let frame = 0;
    let last = 0;
    let time = 0;
    let visible = true;

    const tick = (now: number) => {
      // Cap the step so returning to a background tab doesn't jump.
      time += Math.min(now - (last || now), 50) / 1000;
      last = now;
      const phase = time * SPIN;
      paths.forEach((path, i) => {
        path.setAttribute("d", ringPath(meridianAngle(i, phase), true));
      });
      const angle = DOT_START + time * DOT_SPIN;
      dot.current?.setAttribute("cx", (260 + 232 * Math.cos(angle)).toFixed(2));
      dot.current?.setAttribute("cy", (260 + 232 * Math.sin(angle)).toFixed(2));
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (frame || !visible || document.hidden) return;
      last = 0;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    });
    observer.observe(art.current);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const dotX = (260 + 232 * Math.cos(DOT_START)).toFixed(2);
  const dotY = (260 + 232 * Math.sin(DOT_START)).toFixed(2);

  return (
    <div className="orbit-art" aria-hidden="true" ref={art}>
      <svg className="orbit-drawing" viewBox="0 0 520 520" fill="none">
        <circle
          className="orbit-dashed"
          cx="260"
          cy="260"
          r="232"
          stroke="#c8c8c8"
          strokeDasharray="2 6"
        />
        <g className="orbit-wireframe" stroke="#000" strokeWidth="0.6">
          <g ref={meridianGroup}>
            {meridians.map((path, i) => (
              <path key={`m${i}`} d={path} opacity="0.5" />
            ))}
          </g>
          {parallels.map((path, i) => (
            <path key={`p${i}`} d={path} opacity="0.4" />
          ))}
        </g>
        {/* Annotation leaders, drafted like a technical drawing */}
        <g stroke="#000" strokeWidth="0.8">
          <path className="orbit-leader" d="M391 144 L436 66 H520" />
          <path className="orbit-leader" d="M129 364 L84 446 H0" />
        </g>
        <rect
          className="orbit-anchor"
          x="387"
          y="140"
          width="8"
          height="8"
          fill="#000"
        />
        <rect
          className="orbit-anchor"
          x="125"
          y="360"
          width="8"
          height="8"
          fill="#000"
        />
        <circle ref={dot} cx={dotX} cy={dotY} r="4" fill="#ff0083" />
      </svg>
      <div className="orbit-note orbit-note-holders">
        <strong>RING holders</strong>
        <span>A voice in the ecosystem</span>
      </div>
      <div className="orbit-note orbit-note-builders">
        <strong>Builders & contributors</strong>
        <span>Ideas into applications</span>
      </div>
    </div>
  );
}
