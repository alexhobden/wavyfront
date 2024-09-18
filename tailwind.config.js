/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                wavy: ["wavy", "sans-serif"],
                console: ["console", "sans-serif"],
            },

            boxShadow: {
                header: `
                    inset -2px -2px 0 0 #443d2d,
                    inset 2px 2px 0 0 #ffeec0,
                    inset -4px -4px 0 0 #c4b795
                `,
            },
            backgroundImage: {
                header: "linear-gradient(to right, #583566, #e6b8f8)",
            },

            flexGrow: {
                4: "4",
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".wavy-solid": {
                    backgroundColor: "#ffe8a9",
                    boxShadow: `
                      inset -2px -2px 0 0 #443d2d,
                      inset 2px 2px 0 0 #fffaee,
                      inset -4px -4px 0 0 #c4b795,
                      inset 4px 4px 0 0 #ffeec0
                    `,
                },
                ".wavy-hollow": {
                    boxShadow: `
                      inset -2px -2px 0 0 #fffaee,
                      inset 2px 2px 0 0 #443d2d,
                      inset -4px -4px 0 0 #ffeec0,
                      inset 4px 4px 0 0 #c4b795
                    `,
                },

                ".wavy-button": {
                    backgroundColor: "#ffe8a9",
                    boxShadow: `
                        inset -2px -2px 0 0 #000000,
                        inset 2px 2px 0 0 #545454,
                        inset -3px -3px 0 0 #443d2d,
                        inset 3px 3px 0 0 #fffaee,
                        inset -4px -4px 0 0 #c4b795,
                        inset 4px 4px 0 0 #fff2d0
                
                    `,
                },
            })
        },
    ],
}
