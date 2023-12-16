const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			rubik: ['Rubik', 'sans-serif']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',
			neutral: {
				50: '#F7F6F5',
				100: '#EFEDEB',
				150: '#E7E4E2',
				200: '#DFDBD8',
				300: '#CFC9C4',
				400: '#BFB7B1',
				500: '#AFA59D',
				600: '#908881',
				650: '#716A65',
				700: '#524D48',
				750: '#433E3A',
				800: '#332F2C',
				850: '#24211E',
				900: '#141210'
			},
			primary: {
				50: '#EFF3F9',
				100: '#DEE6F3',
				150: '#CEDAED',
				200: '#BECDE7',
				300: '#9DB5DC',
				400: '#7D9CD0',
				500: '#5C83C4',
				550: '#446EB1',
				600: '#2C599D',
				650: '#234A87',
				700: '#1A3B70',
				750: '#162F5F',
				800: '#11224E',
				850: '#0D1A3B',
				900: '#091228'
			},
			peach: {
				50: '#FEEFEE',
				100: '#FDE0DE',
				150: '#FBD0CD',
				200: '#FAC1BD',
				300: '#F8A19B',
				400: '#F5827A',
				500: '#F36359',
				600: '#D35148',
				650: '#B24038',
				700: '#922E27',
				750: '#82251F',
				800: '#711D17',
				850: '#61140E',
				900: '#510B06'
			},
			orange: {
				50: '#FFF5EE',
				100: '#FEEBDC',
				150: '#FEE1CB',
				200: '#FDD7B9',
				300: '#FDC397',
				400: '#FCAF74',
				500: '#FB9B51',
				600: '#DA8441',
				650: '#B96C31',
				700: '#975522',
				750: '#87491A',
				800: '#763D12',
				850: '#66320A',
				900: '#552602'
			}
		}
	},
	plugins: []
};
