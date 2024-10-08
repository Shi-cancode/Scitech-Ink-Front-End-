import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 768px) { ... }

      lg: "1150px",
      // => @media (min-width: 1024px) { ... }

      xl: "1350px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        text: "#727374",
        text_black: "#000000",
        secondary: "#F4270D",
        bg_secondary: "#D9D9D9",
        bg_black: "#252525",
      },
      fontFamily: {
        Plus_Jakarta_Sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
