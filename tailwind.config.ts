import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, rgba(9,203,140,1) 0%, rgba(255,255,255,1) 100%)",
      },
      colors: {
        "custom-color": "rgb(9,203,140)",
      },
    },
  },
  plugins: [],
}
export default config
