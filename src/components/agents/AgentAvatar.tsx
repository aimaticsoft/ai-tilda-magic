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

type EyeStyle = "dots" | "squares" | "visor" | "wide";
type AntennaStyle = "none" | "single" | "double";
type MouthStyle = "line" | "smile" | "dots";

const VARIANT_STYLE: Record<
  AgentAvatarVariant,
  { eyes: EyeStyle; antenna: AntennaStyle; mouth: MouthStyle; chipSide: "left" | "right" }
> = {
  paint_seller: { eyes: "wide", antenna: "single", mouth: "smile", chipSide: "right" },
  autoservice_manager: { eyes: "squares", antenna: "double", mouth: "line", chipSide: "left" },
  flowers_seller: { eyes: "dots", antenna: "single", mouth: "smile", chipSide: "left" },
  apple_seller: { eyes: "visor", antenna: "none", mouth: "line", chipSide: "right" },
  fitness_admin: { eyes: "wide", antenna: "double", mouth: "dots", chipSide: "left" },
  beauty_admin: { eyes: "dots", antenna: "none", mouth: "smile", chipSide: "right" },
  autochem_seller: { eyes: "squares", antenna: "single", mouth: "dots", chipSide: "right" },
  cleaning_manager: { eyes: "visor", antenna: "single", mouth: "smile", chipSide: "left" },
  it_manager: { eyes: "visor", antenna: "double", mouth: "line", chipSide: "right" },
};

const BotGlyph = ({ variant }: { variant: AgentAvatarVariant }) => {
  const { eyes, antenna, mouth } = VARIANT_STYLE[variant];

  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 text-white/90"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* head */}
      <rect x="6" y="7" width="12" height="12" rx="3" />

      {/* antenna */}
      {antenna !== "none" && (
        <>
          <path d="M12 7V4" />
          <circle cx="12" cy="3" r="1" />
        </>
      )}
      {antenna === "double" && (
        <>
          <path d="M9 7V5" />
          <circle cx="9" cy="4" r="0.85" />
          <path d="M15 7V5" />
          <circle cx="15" cy="4" r="0.85" />
        </>
      )}

      {/* eyes */}
      {eyes === "dots" && (
        <>
          <circle cx="10" cy="12" r="0.9" />
          <circle cx="14" cy="12" r="0.9" />
        </>
      )}
      {eyes === "wide" && (
        <>
          <path d="M9.2 12h1.6" />
          <path d="M13.2 12h1.6" />
        </>
      )}
      {eyes === "squares" && (
        <>
          <rect x="9" y="11" width="2" height="2" rx="0.4" />
          <rect x="13" y="11" width="2" height="2" rx="0.4" />
        </>
      )}
      {eyes === "visor" && <path d="M9 12h6" />}

      {/* mouth */}
      {mouth === "line" && <path d="M10 15h4" />}
      {mouth === "smile" && <path d="M10 15c1.2 1 2.8 1 4 0" />}
      {mouth === "dots" && (
        <>
          <circle cx="11" cy="15" r="0.55" />
          <circle cx="13" cy="15" r="0.55" />
        </>
      )}
    </svg>
  );
};

const AgentAvatar = ({
  gradient,
  isHovered,
  variant,
}: {
  gradient: string;
  isHovered: boolean;
  variant: AgentAvatarVariant;
}) => {
  const { chipSide } = VARIANT_STYLE[variant];

  return (
    <motion.div
      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 overflow-hidden`}
      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Animated rings */}
      <motion.div
        className="absolute inset-0 border-2 border-white/20 rounded-2xl"
        animate={isHovered ? { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Minimal bot glyph */}
      <BotGlyph variant={variant} />

      {/* Animated dot - "online" indicator */}
      <motion.div
        className={`absolute -bottom-0.5 ${chipSide === "left" ? "-left-0.5" : "-right-0.5"} w-4 h-4 rounded-full bg-green-400 border-2 border-card`}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default AgentAvatar;
