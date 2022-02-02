module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 8s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(50px, 100px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-80px, 80px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      backgroundImage: {
        'hero': 'url(/convertify.jpg)',
      },
      colors: {
        'mountain-meadow': {  
        DEFAULT: '#0EBB82',
        '50'   : '#8AF6D2',
        '100'  : '#77F5CB',
        '200'  : '#51F2BD',
        '300'  : '#2CEFAE',
        '400'  : '#11E19C',
        '500'  : '#0EBB82',
        '600'  : '#0A875D',
        '700'  : '#065339',
        '800'  : '#021E15',
        '900'  : '#000000'
      },
      'bright-turquoise': {  DEFAULT: '#05EBE7',  '50': '#AAFDFC',  '100': '#96FDFB',  '200': '#6EFCFA',  '300': '#46FBF8',  '400': '#1EFAF7',  '500': '#05EBE7',  '600': '#04B4B1',  '700': '#037D7B',  '800': '#014645',  '900': '#000F0F'},
      },
      height: {
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
      },
      width: {
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
