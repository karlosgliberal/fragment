const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {

        container: {
            center: true,
        },

        extend: {

            screens: {
                'sm': { 'min': '640px', 'max': '767px' },
                'md': { 'min': '768px', 'max': '1023px' },
                'lg': { 'min': '1024px', 'max': '1279px' },
                'xl': { 'min': '1280px' },
            },


            fontSize: {
                xs: '.75rem',
                sm: '.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
                '10xl': '8rem',
            },
            colors: {
                white: '#ffffff',
                darkblue: '#2E2D3A',
                orange: '#FF2200',
                graysoft: '#E6E3E2',
            },

            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                ptserif: ['PT Serif', 'serif'],
            },

        },
    },
    variants: {},
    plugins: [],
};
