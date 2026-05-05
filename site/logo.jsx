// Brand logo components used across all pages.

function CapsuleGlyph({ width = 64, height = 24, primary = window.CL.signal, secondary = window.CL.ink, tilt = 0, style = {} }) {
  return (
    <span style={{ display: 'inline-block', width, height, transform: `rotate(${tilt}deg)`, position: 'relative', ...style }}>
      <span style={{ position: 'absolute', left: 0, top: 0, width: '50%', height: '100%', background: primary, borderTopLeftRadius: height, borderBottomLeftRadius: height }} />
      <span style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', background: secondary, borderTopRightRadius: height, borderBottomRightRadius: height }} />
      <span style={{ position: 'absolute', left: '50%', top: 0, width: 1, height: '100%', background: 'rgba(0,0,0,.18)' }} />
    </span>
  );
}

function SpecimenCapsule({ size = 220, showLabels = true, signalDot = true, hatch = true, tilt = 0 }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 320 200" style={{ display: 'block', transform: `rotate(${tilt}deg)` }}>
      <defs>
        <pattern id={`cl-hatch-${size}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={window.CL.blueprint} strokeWidth="1" />
        </pattern>
      </defs>
      {showLabels && (
        <>
          <g stroke={window.CL.inkSoft} strokeWidth="0.8" fill="none">
            <line x1="40" y1="40" x2="280" y2="40" />
            <line x1="40" y1="35" x2="40" y2="45" />
            <line x1="280" y1="35" x2="280" y2="45" />
          </g>
          <text x="160" y="32" textAnchor="middle" fontFamily={window.CL.mono} fontSize="10" fill={window.CL.inkSoft} letterSpacing="2">240.0 mm</text>
        </>
      )}
      <g transform="translate(40 70)">
        <rect x="0" y="0" width="240" height="80" rx="40" ry="40" fill={window.CL.paper} stroke={window.CL.ink} strokeWidth="1.6" />
        {hatch && <path d="M 120 0 L 200 0 A 40 40 0 0 1 200 80 L 120 80 Z" fill={`url(#cl-hatch-${size})`} opacity="0.85" />}
        <line x1="120" y1="0" x2="120" y2="80" stroke={window.CL.ink} strokeWidth="1.2" />
        {showLabels && [40, 80, 160].map((x, i) => (
          <line key={i} x1={x} y1="0" x2={x} y2="-6" stroke={window.CL.inkSoft} strokeWidth="0.8" />
        ))}
        {signalDot && <circle cx="60" cy="40" r="5" fill={window.CL.signal} />}
      </g>
      {showLabels && (
        <>
          <g stroke={window.CL.ink} strokeWidth="0.8" fill="none">
            <path d="M 100 110 L 100 175 L 60 175" />
            <path d="M 220 110 L 220 175 L 260 175" />
          </g>
          <text x="55" y="178" textAnchor="end" fontFamily={window.CL.mono} fontSize="10" fill={window.CL.ink} letterSpacing="1.5">PAYLOAD A</text>
          <text x="265" y="178" fontFamily={window.CL.mono} fontSize="10" fill={window.CL.ink} letterSpacing="1.5">PAYLOAD B</text>
        </>
      )}
    </svg>
  );
}

function Seal({ size = 110, color = window.CL.signal, year = '2024' }) {
  const r   = size / 2 - 2;
  const id  = `seal-${size}-${year}`;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <defs>
        <path id={id} d={`M ${size/2} ${size/2} m -${r-10} 0 a ${r-10} ${r-10} 0 1 1 ${(r-10)*2} 0 a ${r-10} ${r-10} 0 1 1 -${(r-10)*2} 0`} />
      </defs>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="1.4" />
      <circle cx={size/2} cy={size/2} r={r-6} fill="none" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" />
      <text fill={color} fontFamily={window.CL.mono} fontSize="8" letterSpacing="3">
        <textPath href={`#${id}`} startOffset="0">EVIDENCE · IN · PRACTICE · EVIDENCE · IN · PRACTICE · </textPath>
      </text>
      <text x={size/2} y={size/2 - 4}  textAnchor="middle" fontFamily={window.CL.display} fontStyle="italic" fontWeight="500" fontSize={size * 0.18} fill={color}>est.</text>
      <text x={size/2} y={size/2 + 16} textAnchor="middle" fontFamily={window.CL.mono} fontSize={size * 0.12} fill={color} letterSpacing="2">{year}</text>
    </svg>
  );
}

function Wordmark({ size = 64, color, compact = false }) {
  const fg = color || window.CL.ink;
  return (
    <div style={{ fontFamily: window.CL.display, fontWeight: 500, color: fg, fontSize: size, lineHeight: 0.88, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
      CAPS<span style={{ fontStyle: 'italic', fontWeight: 400 }}>u</span>L<span style={{ fontStyle: 'italic', fontWeight: 400 }}>e</span>
    </div>
  );
}

function BrandCapsule({ size = 32, color, style = {} }) {
  const c = color || window.CL.signal;
  return (
    <span style={{
      display: 'inline-block', width: size, height: size,
      WebkitMaskImage: 'url("site/assets/capsule-glyph.png")', maskImage: 'url("site/assets/capsule-glyph.png")',
      WebkitMaskSize: 'contain', maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center', maskPosition: 'center',
      background: c, ...style,
    }} />
  );
}

window.CapsuleGlyph   = CapsuleGlyph;
window.SpecimenCapsule = SpecimenCapsule;
window.Seal           = Seal;
window.Wordmark       = Wordmark;
window.BrandCapsule   = BrandCapsule;
