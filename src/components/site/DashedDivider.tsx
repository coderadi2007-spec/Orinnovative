export function DashedDivider({
  height = 80,
  variant = "dark",
}: {
  height?: number;
  variant?: "dark" | "light";
}) {
  return (
    <div
      className={variant === "light" ? "dashed-line-light" : "dashed-line"}
      style={{ height }}
      aria-hidden
    />
  );
}
