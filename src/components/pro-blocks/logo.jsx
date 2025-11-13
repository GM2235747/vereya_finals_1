export const Logo = ({ width = 48, height = 48, className = "" }) => {
  // Use the actual logo image placed in /public/logo.svg.
  // Using an <img> ensures the exact artwork is used and keeps props the same.
  return (
    <img
      src="/emblem.png"
      width={width}
      height={height}
      className={className}
      alt="Verēya emblem"
      loading="lazy"
      style={{ objectFit: "contain", display: "block" }}
    />
  );
};
