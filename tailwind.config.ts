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
      },
    },
  },
  plugins: [],
} satisfies Config;
