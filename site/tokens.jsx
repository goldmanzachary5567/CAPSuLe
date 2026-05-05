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
  `;
  document.head.appendChild(s);
})();
