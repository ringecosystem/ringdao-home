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

const meridians = Array.from({ length: 32 }, (_, i) =>
  ringPath(((i + 0.5) / 32) * Math.PI * 2, true),
);
const parallels = Array.from({ length: 8 }, (_, i) =>
  ringPath((i / 8) * Math.PI * 2, false),
);

export default function Orbit() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <svg className="orbit-drawing" viewBox="0 0 520 520" fill="none">
        <circle
          cx="260"
          cy="260"
          r="232"
          stroke="#c8c8c8"
          strokeDasharray="2 6"
        />
        <g className="orbit-wireframe" stroke="#000" strokeWidth="0.6">
          {meridians.map((path, i) => (
            <path key={`m${i}`} d={path} opacity="0.5" />
          ))}
          {parallels.map((path, i) => (
            <path key={`p${i}`} d={path} opacity="0.4" />
          ))}
        </g>
        {/* Annotation leaders, drafted like a technical drawing */}
        <g stroke="#000" strokeWidth="0.8">
          <path d="M391 144 L436 66 H520" />
          <path d="M129 364 L84 446 H0" />
        </g>
        <rect x="387" y="140" width="8" height="8" fill="#000" />
        <rect x="125" y="360" width="8" height="8" fill="#000" />
        <circle cx="436" cy="409" r="4" fill="#ff0083" />
      </svg>
      <div className="orbit-note orbit-note-holders">
        <strong>RING holders</strong>
        <span>A voice in the ecosystem</span>
      </div>
      <div className="orbit-note orbit-note-builders">
        <strong>Builders & contributors</strong>
        <span>Ideas into applications</span>
      </div>
      <div className="orbit-center">
        Community
        <br />
        at the core
      </div>
    </div>
  );
}
