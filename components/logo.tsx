import type { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 32 32"
    {...props}
  >
    <title>Automatehub</title>
    {/* Left ear */}
    <path d="M7 14L11 7L13 15L7 14Z" />
    {/* Right ear */}
    <path d="M25 14L21 7L19 15L25 14Z" />
    {/* Left face */}
    <path d="M7 14L13 15L12 21L7 14Z" />
    {/* Right face */}
    <path d="M25 14L19 15L20 21L25 14Z" />
    {/* Nose/chin */}
    <path d="M12 21L16 26L20 21L16 16L12 21Z" />
  </svg>
);
