const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  external: "M6 18 18 6M6 6h12v12",
  down: "M12 4v16m-6-6 6 6 6-6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "m6 6 12 12M6 18 18 6",
  square: "M4 4h16v16H4zM4 10h16M10 10v10",
  atlas: "M4 7 9 4l6 3 5-3v13l-5 3-6-3-5 3V7ZM9 4v13M15 7v13",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18",
  bridge: "M3 18V6m18 12V6M3 9c6 8 12 8 18 0M3 18h18M8 14v4m8-4v4",
  community:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
};

export default function Icon({
  name,
  className = "",
}: {
  name: keyof typeof paths;
  className?: string;
}) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
