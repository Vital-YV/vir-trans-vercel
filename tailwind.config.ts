/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			width: {
				'1200': '1200px',
				'800': '800px',
				'700': '700px',
				'600': '600px',
				'500': '500px',
				'450': '450px',
				'400': '400px',
				'350': '350px',
				'300': '300px',
				'250': '250px',
				'200': '200px',
				'150': '150px',
				'100': '100px',
				'KirpichFull': '100vw',
				'KirpichXl': '30vw',
				'KirpichMd': '33vw',
				'Kirpich': '50vw',
				'60vw': '60vw',
				'50%': '50%',
				'10vw': '10vw',
			},
			height: {
				'fullForFooter': '60vh',
				'40vh': '40vh',
				'600': '600px',
				'500': '500px',
				'450': '450px',
				'400': '400px',
				'300': '300px',
				'KirpichXl': '30vw',
				'KirpichMd': '33vw',
				'Kirpich': '50vw',
				'blurLines': '50vh',
				'10vh': '10vh',
				'50vh': '50vh',
			},
			maxHeight: {
				'700': '700px',
				'600': '600px',
				'500': '500px',
				'450': '450px',
				'400': '400px',
				'300': '300px',
				'200': '200px',
			},
			minHeight: {
				'700': '700px',
				'600': '600px',
				'500': '500px',
				'450': '450px',
				'400': '400px',
				'300': '300px',
				'200': '200px',
			},
			maxWidth: {
				'1300': '1300px',
				'1000': '1000px',
				'900': '900px',
				'850': '850px',
				'700': '700px',
				'600': '600px',
				'500': '500px',
				'450': '450px',
				'400': '400px',
				'300': '300px',
				'200': '200px',
			},
			minWidth: {
				'1000': '1000px',
				'700': '700px',
				'600': '600px',
				'500': '500px',
				'450': '450px',
				'400': '400px',
				'300': '300px',
				'200': '200px',
				'150': '150px',
			},
			margin: {
				'fullForFooter': '30vh',
				'fullForButton': '67vh',
				'ForBottomButton': '20vh',
				'ForTopButton': '16vh',
				'forBlurLinesOne': '10vw',
				'forBlurLinesTwo': '20vw',
				'forBlurLinesThree': '27vw',
				'forBlurLinesFour': '32vw',
				'forBlurLinesFive': '46vw',
				'forBlurLinesSix': '57vw',
				'forBlurLinesSeven': '63vw',
				'forBlurLinesEight': '75vw',
				'forBlurLinesNine': '84vw',
				'forBlurLinesTen': '91vw',
				'screenY': '100vh',
				'120vh': '120vh',
				'50vh': '50vh',
				'15vw': '15vw',
				'30vw': '30vw',

			},
			padding: {
				'forButton': '6px',
				'transportContent': '3vh',
				'forTop': '20vh',
				'fotoLeftXl': '5vw',
				'fotoLeftMd': '10vw',
				'fotoLeft': '20vw',
				'plFolderGallery': '10vw',
				'15vh': '15vh',
				'15vw': '15vw',

			},
			spacing: {
				'20vh': '20vh'
			},
			fontFamily: {
				'neonfonts': ['Neonderthaw'],
				'playfair': ['Playfair Display'],
				'montserrat': ['Montserrat'],
				'russo': ['Russo One'],
				'handjet': ['Handjet']
			},
			fontSize: {
				'neonsign': '20vh',
				'xxs': '0.6rem',
				'xxxs': '0.5rem',
				'xxxxs': '0.4rem',
			},
			textShadow: {
				sm: '0 2px 8px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
			scale: {
				eight: '0.8',
				'0.25': '0.25'
			},
			keyframes: {
				floatUp: {
					'0%': { bottom: '0', height: '0vh', opacity: '0.1' },
					'25%': { bottom: '10vh', height: '15vh', opacity: '0.5' },
					'50%': { bottom: '15vh', height: '35vh', opacity: '1' },
					'75%': { bottom: '20vh', height: '55vh', opacity: '0.5' },
					'100%': { bottom: '25vh', height: '75vh', opacity: '0.1' },
				},
			},
			animation: {
				'floatUpOne': 'floatUp 3s infinite linear',
				'floatUpTwo': 'floatUp 4s infinite linear',
				'floatUpThree': 'floatUp 2.7s infinite linear',
				'floatUpFour': 'floatUp 4.5s infinite linear',
				'floatUpFive': 'floatUp 3.5s infinite linear',
				'floatUpSix': 'floatUp 3.2s infinite linear',
			},
			screens: {
				'h-sm': { 'raw': '(max-height: 800px)' },
				'h-xs': { 'raw': '(max-height: 600px)' },
				// Add more custom height breakpoints as needed
			},


		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
		function ({ addUtilities }) {
			const newUtilities = {
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
			};
			addUtilities(newUtilities)
		}
	],
}
