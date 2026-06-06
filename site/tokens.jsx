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
    button { cursor: pointer; border: none; background: none; }
    .cl-mono {
      font-family: "JetBrains Mono", monospace;
      font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
    }
    .cl-link { border-bottom: 1px solid transparent; transition: border-color .18s; }
    .cl-link:hover { border-bottom-color: currentColor; }
    .cl-page-grid { width: 100%; }

    /* --- Responsive grid helpers (used alongside className) --- */
    .cl-grid-hero  { display: grid; grid-template-columns: 1.5fr 1fr; gap: 48px; align-items: flex-start; }
    .cl-grid-2     { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; }
    .cl-grid-2-eq  { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
    .cl-grid-3     { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
    .cl-grid-4     { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
    .cl-grid-prog  { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
    .cl-grid-team  { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
    .cl-grid-board { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
    .cl-grid-tiers { display: grid; grid-template-columns: repeat(3,1fr) auto; gap: 0; }

    @media (max-width: 900px) {
      .cl-grid-hero  { grid-template-columns: 1fr !important; }
      .cl-grid-2     { grid-template-columns: 1fr !important; gap: 40px !important; }
      .cl-grid-2-eq  { grid-template-columns: 1fr !important; gap: 32px !important; }
      .cl-grid-3     { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
      .cl-grid-4     { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
      .cl-grid-prog  { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
      .cl-grid-team  { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
      .cl-grid-board { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
      .cl-grid-tiers { grid-template-columns: 1fr !important; }
      .cl-hide-mobile { display: none !important; }
      .cl-section-pad { padding-top: 64px !important; padding-bottom: 64px !important; }
      .cl-inner-pad   { padding-left: 20px !important; padding-right: 20px !important; }
    }
    @media (max-width: 540px) {
      .cl-grid-3     { grid-template-columns: 1fr !important; }
      .cl-grid-4     { grid-template-columns: 1fr !important; }
      .cl-grid-prog  { grid-template-columns: 1fr !important; }
      .cl-grid-team  { grid-template-columns: 1fr 1fr !important; }
      .cl-grid-board { grid-template-columns: 1fr !important; }
    }

    /* --- Mobile nav --- */
    .cl-nav-mobile-menu {
      display: none; flex-direction: column; gap: 0;
      position: absolute; top: 100%; left: 0; right: 0;
      background: #E8E2D1; border-bottom: 1.5px solid #0B1B26;
      padding: 16px 20px 24px;
    }
    .cl-nav-mobile-menu.open { display: flex; }
    .cl-nav-desktop { display: flex; gap: 28px; justify-content: center; }
    .cl-hamburger   { display: none; }
    @media (max-width: 768px) {
      .cl-nav-desktop { display: none !important; }
      .cl-hamburger   { display: flex !important; }
    }

    /* --- Carousel --- */
    @keyframes cl-scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .cl-carousel-track { animation: cl-scroll 18s linear infinite; }
    .cl-carousel-track:hover { animation-play-state: paused; }

    /* --- Tooltip --- */
    .cl-tooltip-wrap { position: relative; display: inline-block; }
    .cl-tooltip {
      visibility: hidden; opacity: 0;
      position: absolute; bottom: 110%; left: 50%; transform: translateX(-50%);
      background: #0B1B26; color: #F5EFE2;
      padding: 5px 10px; font-family: "JetBrains Mono",monospace;
      font-size: 10px; letter-spacing: .15em; text-transform: uppercase;
      white-space: nowrap; pointer-events: none;
      transition: opacity .15s; z-index: 20;
    }
    .cl-tooltip-wrap:hover .cl-tooltip { visibility: visible; opacity: 1; }

    /* --- Form inputs --- */
    .cl-input {
      width: 100%; padding: 12px 14px;
      border: 1px solid rgba(11,27,38,.25); background: #F5EFE2;
      font-family: "Source Serif 4",Georgia,serif; font-size: 16px; color: #0B1B26;
      outline: none; transition: border-color .18s;
    }
    .cl-input:focus { border-color: #C84B32; }
    .cl-input::placeholder { color: rgba(11,27,38,.4); }
    textarea.cl-input { resize: vertical; min-height: 100px; }
    select.cl-input { cursor: pointer; }
  `;
  document.head.appendChild(s);
})();

// Shared responsive hook — use inside any component to detect mobile viewport.
function useIsMobile(bp) {
  var breakpoint = bp || 768;
  var [isMobile, setIsMobile] = React.useState(window.innerWidth <= breakpoint);
  React.useEffect(function() {
    var h = function() { setIsMobile(window.innerWidth <= breakpoint); };
    window.addEventListener('resize', h);
    return function() { window.removeEventListener('resize', h); };
  }, [breakpoint]);
  return isMobile;
}
window.useIsMobile = useIsMobile;
