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
        primary: {
          light: "hsl(var(--color-primary), 85%, <alpha-value>)",
          DEFAULT: "hsl(var(--color-primary), 53%, <alpha-value>)",
        },
        secondary: {
          light: "hsl(var(--color-secondary), 55%, <alpha-value>)",
          DEFAULT: "hsl(var(--color-secondary), 32%, <alpha-value>)",
        },
        accent: {
          light: "hsl(var(--color-accent), 55%, <alpha-value>)",
          DEFAULT: "hsl(var(--color-accent), 32%, <alpha-value>)",
        },
        neutral: {},
        base: {},
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
