import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    extend: {
      keyframes: {
        "slide-in": {
          "0%": {
            opacity: "0;",
            width: "0%;",
          },
          "100%": {
            opacity: "1;",
            width: "100%;",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
