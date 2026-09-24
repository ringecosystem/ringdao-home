import Icon from "./Icon";

// A static wireframe torus: many contributions forming one ring.
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

const meridians = Array.from({ length: 56 }, (_, i) =>
  ringPath((i / 56) * Math.PI * 2, true),
);
const parallels = Array.from({ length: 18 }, (_, i) =>
  ringPath((i / 18) * Math.PI * 2, false),
);

export default function Orbit() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <div className="orbit-coordinate orbit-coordinate-top">
        A SHARED DIRECTION
      </div>
      <svg className="orbit-drawing" viewBox="0 0 520 520" fill="none">
        <defs>
          <radialGradient id="orbit-halo">
            <stop stopColor="#d7edb4" stopOpacity="0.82" />
            <stop offset="1" stopColor="#e8eedc" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="260" cy="260" r="253" fill="url(#orbit-halo)" />
        <circle
          cx="260"
          cy="260"
          r="230"
          stroke="#cad1bd"
          strokeDasharray="2 7"
        />
        <circle cx="260" cy="260" r="194" stroke="#d8decd" />
        <path d="M260 12v42m0 412v42M12 260h42m412 0h42" stroke="#a6b39c" />
        <g className="orbit-wireframe" stroke="#26442f" strokeWidth="0.8">
          {meridians.map((path, i) => (
            <path key={`m${i}`} d={path} opacity="0.57" />
          ))}
          {parallels.map((path, i) => (
            <path key={`p${i}`} d={path} opacity="0.5" />
          ))}
        </g>
        <circle cx="430" cy="106" r="5" fill="#244b33" />
        <circle cx="71" cy="391" r="5" fill="#244b33" />
        <circle cx="438" cy="405" r="3" fill="#6a7c56" />
      </svg>
      <div className="orbit-label orbit-label-holders">
        <span className="orbit-label-icon">
          <Icon name="community" />
        </span>
        <span>
          RING holders<small>A voice in the ecosystem</small>
        </span>
      </div>
      <div className="orbit-label orbit-label-builders">
        <span className="orbit-label-icon">
          <Icon name="code" />
        </span>
        <span>
          Builders & contributors<small>Ideas into applications</small>
        </span>
      </div>
      <div className="orbit-center">
        <span className="orbit-center-dot" />
        Community
        <br />
        at the core
      </div>
      <div className="orbit-coordinate orbit-coordinate-bottom">
        MANY CONTRIBUTORS. ONE ECOSYSTEM.
      </div>
    </div>
  );
}
