// Design tokens — all shared across every page via window.CL.
window.CL = {
  ink:       '#0B1B26',
  signal:    '#C84B32',
  paper:     '#F5EFE2',
  cream:     '#F5EFE2',
  paperWarm: '#E8E2D1',
  blueprint: '#1B4066',
  rule:      'rgba(11,27,38,.12)',
  inkSoft:   'rgba(11,27,38,.55)',
  maxw:      '1260px',
  display:   '"Fraunces", "GT Sectra Display", Georgia, serif',
  serif:     '"Source Serif 4", Georgia, serif',
  mono:      '"JetBrains Mono", monospace',
  sans:      '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
};

// Responsive breakpoint hook — call inside any React functional component.
window.useBreakpoint = function(bp) {
  bp = bp == null ? 768 : bp;
  const [below, setBelow] = React.useState(window.innerWidth <= bp);
  React.useEffect(function() {
    const h = function() { setBelow(window.innerWidth <= bp); };
    window.addEventListener('resize', h, { passive: true });
    return function() { window.removeEventListener('resize', h); };
  }, [bp]);
  return below;
};

(function injectGlobal() {
  const s = document.createElement('style');
  s.textContent = `
    *, *::before, *::after { box-sizing: border-box; }
    html { -webkit-font-smoothing: antialiased; scroll-behavior: smooth; }
    body { margin: 0; background: #F5EFE2; color: #0B1B26;
           font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif; }
    a    { text-decoration: none; color: inherit; }
    button { cursor: pointer; }
    .cl-mono {
      font-family: "JetBrains Mono", monospace;
      font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
    }
    .cl-link { border-bottom: 1px solid transparent; transition: border-color .18s; }
    .cl-link:hover { border-bottom-color: currentColor; }
    .cl-page-grid { width: 100%; }

    /* Partner institution marquee */
    @keyframes cl-marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .cl-marquee-wrap { overflow: hidden; }
    .cl-marquee-track {
      display: flex;
      animation: cl-marquee 28s linear infinite;
      width: max-content;
    }
    .cl-marquee-track:hover { animation-play-state: paused; }

    /* Progress letter fill animation */
    @keyframes cl-letter-fill {
      from { background-size: 0% 100%; }
      to   { background-size: 100% 100%; }
    }

    /* Mobile — hide on small screens */
    @media (max-width: 900px) {
      .cl-hide-mobile { display: none !important; }
    }
    @media (min-width: 901px) {
      .cl-mobile-only { display: none !important; }
    }

    /* Responsive section padding */
    @media (max-width: 600px) {
      .cl-section-pad { padding-left: 20px !important; padding-right: 20px !important; }
    }
  `;
  document.head.appendChild(s);
})();
