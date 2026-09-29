// Lucide-backed icon component. Renders real Lucide SVGs (CDN) imperatively so
// React reconciliation never fights the replaced nodes.
function Icon({ name, size = 20, color = "currentColor", strokeWidth = 2, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: { width: size, height: size, stroke: color, "stroke-width": strokeWidth },
    });
  });
  return <span ref={ref} style={{ display: "inline-flex", width: size, height: size, ...style }} />;
}
window.Icon = Icon;
