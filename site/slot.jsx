// SlotWord — animated cycling word used in the hero and nav tagline.

function SlotWord({ words, color, font, weight, size, italic = true, dwellMs = 1700 }) {
  const [idx,   setIdx]   = React.useState(0);
  const [phase, setPhase] = React.useState('settled');
  const longest = React.useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), ''), [words]);

  React.useEffect(() => {
    if (phase === 'settled') {
      const t = setTimeout(() => setPhase('spinning'), dwellMs);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setIdx(i => (i + 1) % words.length); setPhase('settled'); }, 480);
    return () => clearTimeout(t);
  }, [phase, dwellMs, words.length]);

  return (
    <span style={{
      display: 'inline-block', position: 'relative', overflow: 'hidden',
      height: `${size * 1.15}px`, lineHeight: `${size * 1.15}px`,
      fontFamily: font, fontWeight: weight, fontSize: size,
      color, fontStyle: italic ? 'italic' : 'normal', verticalAlign: 'baseline',
    }} aria-live="polite" aria-atomic="true">
      <span style={{ visibility: 'hidden', whiteSpace: 'pre' }}>{longest}</span>
      <span style={{
        position: 'absolute', inset: 0, whiteSpace: 'pre',
        transform: phase === 'spinning' ? `translateY(-${size * 1.15}px)` : 'translateY(0)',
        opacity: phase === 'spinning' ? 0 : 1,
        transition: phase === 'spinning'
          ? 'transform 460ms cubic-bezier(.55,.05,.4,1.15), opacity 220ms ease'
          : 'transform 360ms cubic-bezier(.2,.7,.2,1.05), opacity 240ms ease',
      }}>{words[idx]}</span>
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: -2, height: 2,
        background: color, opacity: phase === 'spinning' ? 0 : 0.35,
        transition: 'opacity 360ms ease',
      }} />
    </span>
  );
}

function Tagline({
  size = 22, weight = 500, color, accent, font,
  before = 'From the lab to the ', after = ' room.', italic = true,
}) {
  return (
    <span style={{ fontFamily: font, fontWeight: weight, fontSize: size, color, lineHeight: 1.2, fontStyle: italic ? 'italic' : 'normal' }}>
      <span>{before}</span>
      <SlotWord words={['living','training','class']} color={accent} font={font} weight={weight} size={size} italic={italic} />
      <span>{after}</span>
    </span>
  );
}

window.SlotWord = SlotWord;
window.Tagline  = Tagline;
