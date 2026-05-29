/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        card: {
          DEFAULT: "var(--color-card)",
          hover: "var(--color-card-hover)",
        },
        border: "var(--color-border)",
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          subtle: "var(--color-accent-subtle)",
        },
        purple: {
          DEFAULT: "var(--color-purple)",
          hover: "var(--color-purple-hover)",
          subtle: "var(--color-purple-subtle)",
        },
        "nav-bg": "var(--color-nav-bg)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
