import { motion } from "framer-motion";

export type AgentAvatarVariant =
  | "paint_seller"
  | "autoservice_manager"
  | "flowers_seller"
  | "apple_seller"
  | "fitness_admin"
  | "beauty_admin"
  | "autochem_seller"
  | "cleaning_manager"
  | "it_manager";

type EyeStyle = "dots" | "squares" | "visor" | "wide" | "round";
type AntennaStyle = "none" | "single" | "double" | "arc";
type MouthStyle = "line" | "smile" | "dots" | "wave";
type HeadShape = "rect" | "rounded" | "hexagon";

const VARIANT_STYLE: Record<
  AgentAvatarVariant,
  { eyes: EyeStyle; antenna: AntennaStyle; mouth: MouthStyle; head: HeadShape; accentOpacity: number }
> = {
  paint_seller: { eyes: "round", antenna: "arc", mouth: "smile", head: "rounded", accentOpacity: 0.3 },
  autoservice_manager: { eyes: "squares", antenna: "double", mouth: "line", head: "rect", accentOpacity: 0.25 },
  flowers_seller: { eyes: "dots", antenna: "single", mouth: "smile", head: "rounded", accentOpacity: 0.35 },
  apple_seller: { eyes: "visor", antenna: "none", mouth: "line", head: "rect", accentOpacity: 0.2 },
  fitness_admin: { eyes: "wide", antenna: "double", mouth: "dots", head: "hexagon", accentOpacity: 0.3 },
  beauty_admin: { eyes: "round", antenna: "none", mouth: "smile", head: "rounded", accentOpacity: 0.4 },
  autochem_seller: { eyes: "squares", antenna: "arc", mouth: "wave", head: "rect", accentOpacity: 0.25 },
  cleaning_manager: { eyes: "dots", antenna: "single", mouth: "smile", head: "hexagon", accentOpacity: 0.3 },
  it_manager: { eyes: "visor", antenna: "double", mouth: "dots", head: "rect", accentOpacity: 0.2 },
};

const BotGlyph = ({ variant }: { variant: AgentAvatarVariant }) => {
  const { eyes, antenna, mouth, head } = VARIANT_STYLE[variant];

  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 text-white/90"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* head shape */}
      {head === "rect" && <rect x="6" y="7" width="12" height="12" rx="2" />}
      {head === "rounded" && <rect x="6" y="7" width="12" height="12" rx="4" />}
      {head === "hexagon" && (
        <path d="M9 7h6l3 3v6l-3 3H9l-3-3v-6l3-3z" />
      )}

      {/* antenna */}
      {antenna === "single" && (
        <>
          <path d="M12 7V4" />
          <circle cx="12" cy="3" r="1" fill="currentColor" />
        </>
      )}
      {antenna === "double" && (
        <>
          <path d="M9 7V5" />
          <circle cx="9" cy="4" r="0.8" fill="currentColor" />
          <path d="M15 7V5" />
          <circle cx="15" cy="4" r="0.8" fill="currentColor" />
        </>
      )}
      {antenna === "arc" && (
        <path d="M9 7 Q12 3 15 7" />
      )}

      {/* eyes */}
      {eyes === "dots" && (
        <>
          <circle cx="10" cy="12" r="1" fill="currentColor" />
          <circle cx="14" cy="12" r="1" fill="currentColor" />
        </>
      )}
      {eyes === "round" && (
        <>
          <circle cx="10" cy="12" r="1.2" />
          <circle cx="14" cy="12" r="1.2" />
        </>
      )}
      {eyes === "wide" && (
        <>
          <path d="M9 12h2" />
          <path d="M13 12h2" />
        </>
      )}
      {eyes === "squares" && (
        <>
          <rect x="8.5" y="10.5" width="2.5" height="2.5" rx="0.3" />
          <rect x="13" y="10.5" width="2.5" height="2.5" rx="0.3" />
        </>
      )}
      {eyes === "visor" && <path d="M8.5 12h7" />}

      {/* mouth */}
      {mouth === "line" && <path d="M10 15.5h4" />}
      {mouth === "smile" && <path d="M10 15c1 1 3 1 4 0" />}
      {mouth === "wave" && <path d="M9 15.5 Q10.5 16.5 12 15.5 Q13.5 14.5 15 15.5" />}
      {mouth === "dots" && (
        <>
          <circle cx="10.5" cy="15.5" r="0.5" fill="currentColor" />
          <circle cx="12" cy="15.5" r="0.5" fill="currentColor" />
          <circle cx="13.5" cy="15.5" r="0.5" fill="currentColor" />
        </>
      )}
    </svg>
  );
};

const AgentAvatar = ({
  isHovered,
  variant,
}: {
  gradient?: string;
  isHovered: boolean;
  variant: AgentAvatarVariant;
}) => {
  const { accentOpacity } = VARIANT_STYLE[variant];

  return (
    <motion.div
      className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center shrink-0 overflow-hidden"
      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Inner glow accent - varies by agent */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-cyan-400/0 via-cyan-400/20 to-transparent"
        style={{ opacity: accentOpacity }}
      />
      
      {/* Animated rings */}
      <motion.div
        className="absolute inset-0 border-2 border-white/20 rounded-2xl"
        animate={isHovered ? { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Minimal bot glyph */}
      <BotGlyph variant={variant} />
    </motion.div>
  );
};

export default AgentAvatar;
