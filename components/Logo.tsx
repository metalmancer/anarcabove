type LogoProps = {
  size?: number;
  variant?: "dark" | "light";
};

export default function Logo({ size = 120, variant = "dark" }: LogoProps) {
  const fill = variant === "dark" ? "#1a1918" : "#e4e0d7";
  const stroke = variant === "dark" ? "#1a1918" : "#e4e0d7";
  const textColor = variant === "dark" ? "#c4a97d" : "#c4a97d";
  const subColor = variant === "dark" ? "#c4a97d" : "#c4a97d";

  const w = size * (478 / 709);
  const h = size;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 478 709"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back arch (outline only, offset left) */}
      <path
        d="M80 709V360C80 220 160 140 239 140C318 140 398 220 398 360V709"
        stroke={stroke}
        strokeWidth="6"
        fill="none"
      />
      {/* Front arch (filled black) */}
      <rect x="120" y="400" width="238" height="309" fill={fill} />
      <path
        d="M120 709V370C120 250 170 190 239 190C308 190 358 250 358 370V709"
        fill={fill}
      />

      {/* Text inside arch */}
      <text
        x="138"
        y="510"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="52"
        fontWeight="300"
        fill={textColor}
        letterSpacing="2"
      >
        AN
      </text>
      <text
        x="138"
        y="566"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="52"
        fontWeight="300"
        fill={textColor}
        letterSpacing="2"
      >
        ARC
      </text>
      <text
        x="138"
        y="622"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="52"
        fontWeight="300"
        fill={textColor}
        letterSpacing="2"
      >
        ABOVE
      </text>

      {/* Bottom label box */}
      <rect x="120" y="649" width="238" height="60" fill="none" stroke={stroke} strokeWidth="3" />
      <text
        x="239"
        y="685"
        fontFamily="'Jost', sans-serif"
        fontSize="16"
        fontWeight="300"
        fill={subColor}
        letterSpacing="4"
        textAnchor="middle"
      >
        ARCHITECTURE + DESIGN
      </text>
    </svg>
  );
}
