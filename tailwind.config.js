/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      content: {
        'back': 'url("/img/img-Body2.png")',
        'back6':'url("/img/img-Body6.png")',
        'back8':'url("/img/img-Body8.png")',
        'back9':'url("/img/img-Body9.png")',
      },
      backgroundImage: {
        'back7':'url("/img/img-Body7.png")',
        'back10':'url("/img/img-Body10.png")',
        'content':'url("/img/Content.png")',
        'last':'url("/img/last.png")',
        'desktopTabPic':'url("/img/item/desktopTabPic.png")',
        'domainTabPic':'url("/img/item/domainTabPic.png")',
        'tabDeletePic':'url("/img/item/tabDeletePic.png")',
        
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        kalame:['var(--font-kalameh)']
      }
    },
  },
  plugins: [],
};
