import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        card1: "url('public/parallax/layer10.png')",
        card2: "url('public/parallax/layer9.png')",
        card3: "url('public/parallax/layer8.png')",
        card4: "url('public/parallax/layer7.png')",
        card5: "url('public/parallax/layer6.png')",
        card6: "url('public/parallax/layer5.png')",
        card7: "url('public/parallax/layer5.png')",
        card8: "url('public/parallax/layer4.png')",
        card9: "url('public/parallax/layer3.png')",
        card10: "url('public/parallax/layer2.png')",
        card11: "url('public/parallax/layer1.png')",
      },
    },
  },
  plugins: [],
}
export default config
