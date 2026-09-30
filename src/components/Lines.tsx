// Headline split into masked lines so each can rise into place on reveal.
// Light lines come first, bold lines after — the site's light/bold heading mix.
export default function Lines({
  light = [],
  bold = [],
}: {
  light?: string[];
  bold?: string[];
}) {
  const lines = [
    ...light.map((text) => ({ text, strong: false })),
    ...bold.map((text) => ({ text, strong: true })),
  ];
  return (
    <>
      {lines.map(({ text, strong }, index) => (
        <span
          className="line"
          key={text}
          style={{ "--li": index } as Record<string, number>}
        >
          {strong ? <strong>{text}</strong> : <span>{text}</span>}
        </span>
      ))}
    </>
  );
}
