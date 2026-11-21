/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wabi: {
          paper: '#FAF6F0',     // Latar kertas beras mentah (hangat & terang)
          linen: '#F2EAE0',     // Krem linen sekunder
          stone: '#E0D6C8',     // Garis pembatas organik
          bark: '#63584E',      // Teks sekunder kulit kayu
          char: '#231D18',      // Teks utama arang jati
          walnut: '#1C1510',    // Blok gelap kayu walnut tua
          brass: '#9A7B2D',     // Aksen kuningan (dipakai sangat hemat)
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};