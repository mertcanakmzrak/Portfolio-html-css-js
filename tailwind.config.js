/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    screens: {
      'sm': '640px', // Küçük ekranlar
      'md': '768px', // Orta büyüklükte ekranlar
      'lg': '1024px', // Büyük ekranlar
      'xl': '1280px', // Ekstra büyük ekranlar
    },
    // Diğer tema ayarları...
  },
  plugins: [],
}

