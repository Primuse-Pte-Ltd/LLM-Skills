// Material Symbols Outlined wrapper — mirrors components/material-icon.tsx in the
// storefront. The font itself is loaded by tokens/fonts.css.
function Icon({ name, size = 24, fill = false, color, style = {}, ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={"ms" + (fill ? " fill" : "")}
      style={{ fontSize: size, color, ...style }}
      {...rest}
    >
      {name}
    </span>
  );
}
window.Icon = Icon;
