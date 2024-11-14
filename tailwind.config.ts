import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    boxShadow: {
      DEFAULT: "0 2px 4px 0 rgba(14, 30, 37, 0.12)",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1172px",
    },
    extend: {
      colors: {
        gray: {
          50: "rgb(243, 242, 239)",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
        },
      },
      fontFamily: {
        sans: [
          '"Lato"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
