import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        terminal: {
          black: "#08090c",
          dark: "#0d1117",
          card: "#0f141c",
          border: "#1f2937",
          line: "rgba(163, 230, 53, 0.15)",
          green: "#a3e635",
          lime: "#9ef01a",
          dim: "#4ade80",
          muted: "#9ca3af",
          faint: "#4b5563"
        }
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', '"Press Start 2P"', 'monospace'],
        mono: ['var(--font-mono)', '"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
};
export default config;

