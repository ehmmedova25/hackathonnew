export function GrainOverlay({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute inset-0 bg-grain ${className}`} />;
}

export function LightLeaks() {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 light-leak-tl" />
      <div aria-hidden className="pointer-events-none absolute inset-0 light-leak-br" />
    </>
  );
}
