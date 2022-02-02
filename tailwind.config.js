module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      }
      
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
