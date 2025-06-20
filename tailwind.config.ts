import { transform } from "next/dist/build/swc/generated-native";

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
				'30%': '30%',
				'40%': '40%',
				'50%': '50%',
				'10vw': '10vw',
				'30vw': '30vw',
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
				'20vw': '20vw',
				'30vw': '30vw',
			},
			spacing: {
				'20vh': '20vh'
			},
			fontFamily: {
				'neonfonts': ['Neonderthaw'],
				'playfair': ['Playfair Display'],
				'montserrat': ['Montserrat'],
				'russo': ['Russo One'],
				'handjet': ['Handjet'],
				roboto: ['var(--font-roboto)', 'sans-serif'],
				garamond: ['var(--font-garamond)', 'serif'],
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
			colors: {
				main: '#3b457c',
				darkMain: '#3b457c',

				textMain: '#FB8500',
				textDarkMain: '#FB8500',

				h1: '#3b457c',
				h1Dark: '#FFB703',

				h2: '#219EBC',
				h2Dark: '#FB8500',

				text1: '#D1D5DB',
				text1Dark: '#D1D5DB',

				text2: '#3b457c',
				text2Dark: '#219EBC',

			},
			keyframes: {
				floatUp: {
					'0%': { bottom: '0', height: '0vh', opacity: '0.1' },
					'25%': { bottom: '10vh', height: '15vh', opacity: '0.5' },
					'50%': { bottom: '15vh', height: '35vh', opacity: '1' },
					'75%': { bottom: '20vh', height: '55vh', opacity: '0.5' },
					'100%': { bottom: '25vh', height: '75vh', opacity: '0.1' },
				},
				tilt: {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-6deg)' },
					'50%': { transform: 'rotate(0deg)' },
					'75%': { transform: 'rotate(6deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				helicopterFly: {
					'0%': { transform: 'translate(150%, -120%)' },
					'40%': { transform: 'translate(-108px, 75px)' },
					'50%': { transform: 'translate(-108px, 75px)' },
					'80%': { transform: 'translate(-108px, 60px)' },
					'100%': { transform: 'translate(112px, -25px)' },
				},
				packageLift: {
					'0%, 50%': { transform: 'translate(0, 0)' },
					'40%': { transform: 'translate(0, 0px)' },
					'50%': { transform: 'translate(0, 0px)' },
					'80%': { transform: 'translate(0, -15px)' },
					'100%': { transform: 'translate(220px, -100px)' },
				},
				packageScale: {
					'0%': { scale: '1' },
					'10%': { scale: '2.1' },
					'15%': { scale: '2' },
					'20%': { scale: '2.1' },
					'25%': { scale: '2' },
					'90%': { scale: '2' },
					'100%': { scale: '1' },
				},
				packageInHardhat: {
					'0%': { transform: 'translate(-16px, -100%)' },
					'40%': { transform: 'translate(-16px, -10%)' },
					'60%': { transform: 'translate(-16px, 0px), rotate(3deg)' },
					'85%': { transform: 'translate(-16px, 0px), rotate(6deg)' },
					'95%': { transform: 'translate(-16px, 0px), rotate(9deg)' },
					'100%': { transform: 'translate(-16px, 0px), rotate(12deg)' },
				},
				magnifier: {
					'0%': { transform: 'translate(0%, 0%)' },
					'20%': { transform: 'translate(-50%, -20%)', scale: '1.1' },
					'40%': { transform: 'translate(-25%, 0%)', scale: '0.9' },
					'60%': { transform: 'translate(-50%, 40%)', scale: '1.1' },
					'80%': { transform: 'translate(-10%, 40%)', scale: '0.8' },
					'100%': { transform: 'translate(0%, 0%)' },
				},
				slideIn: {
					'0%': { opacity: 0, transform: 'translateX(-20px)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
				fall: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},

			},
			animation: {
				'floatUpOne': 'floatUp 3s infinite linear',
				'floatUpTwo': 'floatUp 4s infinite linear',
				'floatUpThree': 'floatUp 2.7s infinite linear',
				'floatUpFour': 'floatUp 4.5s infinite linear',
				'floatUpFive': 'floatUp 3.5s infinite linear',
				'floatUpSix': 'floatUp 3.2s infinite linear',
				tilt: 'tilt 0.6s ease-in-out',
				helicopterFly: 'helicopterFly 4s ease-in-out forwards',
				packageLift: 'packageLift 4s ease-in-out forwards',
				packageScale: 'packageScale 4s ease-in-out',
				packageInHardhat: 'packageInHardhat 0.8s ease-in-out',
				magnifier: 'magnifier 4s ease-in-out',
				slideIn: 'slideIn 0.3s ease-out forwards',
				fall: 'fall 10s linear infinite',
				

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
				'.preserve-3d': {
					transformStyle: 'preserve-3d',
				},
				'.backface-hidden': {
					backfaceVisibility: 'hidden',
				},
				'.rotate-y-180': {
					transform: 'rotateY(180deg)',
				},
				'.perspective': {
					perspective: '1000px',
				},
			};
			addUtilities(newUtilities)
		}
	],
}
