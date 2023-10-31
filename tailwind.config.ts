import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        "spin-medium": "spin 10s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        "opacity-up": "opacity-up 0.2s ease-in-out 1",
        "opacity-down": "opacity-down 0.2s ease-in-out 1",
      },
      keyframes: {
        "opacity-up": {
          "0%": { opacity: "0.1" },
          "100%": { opacity: "1" },
        },
        "opacity-down": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
