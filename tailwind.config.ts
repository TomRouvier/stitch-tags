import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001736",
        "primary-container": "#002b5c",
        secondary: "#00687b",
        "secondary-container": "#66defe",
        tertiary: "#14181b",
        "tertiary-container": "#282d30",
        surface: "#f8f9fa",
        "surface-bright": "#f8f9fa",
        "surface-dim": "#d9dadb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "surface-container": "#edeeef",
        "surface-container-high": "#e7e8e9",
        "surface-container-highest": "#e1e3e4",
        "surface-variant": "#e1e3e4",
        "on-surface": "#191c1d",
        "on-surface-variant": "#43474f",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary": "#ffffff",
        outline: "#747780",
        "outline-variant": "#c4c6d0",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "inverse-surface": "#2e3132",
        "inverse-on-surface": "#f0f1f2",
        "secondary-fixed": "#afecff",
        "secondary-fixed-dim": "#5dd5f5",
        "on-secondary-fixed-variant": "#004e5d",
        "on-primary-container": "#7594cb",
        "primary-fixed-dim": "#aac7ff",
        background: "#f8f9fa",
      },
      fontFamily: {
        headline: ["var(--font-manrope)"],
        body: ["var(--font-inter)"],
        label: ["var(--font-inter)"],
      },
      boxShadow: {
        ambient: "0 20px 40px rgba(0, 23, 54, 0.06)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};

export default config;
