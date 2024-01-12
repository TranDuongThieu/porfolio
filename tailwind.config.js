/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                abel: "'Abel', sans-serif",
                monospace: "'Roboto Mono', monospace",
                cursive: "'Shantell Sans', cursive",
                poppins: "'Poppins', sans-serif"
            },
            keyframes: {
                "spin": {
                    "to": {
                        transform: "rotate(360deg)"
                    }
                },
                "fade-in": {
                    "0%": {
                        top: "80%",
                    },
                    "100%": {
                        bottom: "20%",
                    },
                },
                "left-to-right": {
                    "0%": {
                        left: "-999px",
                        "100%": {
                            left: "0"
                        }
                    }
                },
                "morph": {
                    // borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
                    "0%": {
                        borderRadius: "60% 40% 30% 70% /60% 30% 70% 40%",
                    },
                    "50%": {
                        borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
                    },
                    "100%": {
                        borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%"
                    }
                },
                "bounce2": {
                    "0%, 100%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-20px)",
                    }
                },
            },
            animation: {
                "fade-in": "fade-in 1s ease",
                "left-to-right": "left-to-right 1s ease",
                "morph": "morph 8s ease-in-out infinite",
                "bounce2": "bounce2 1s ease-in-out",
                'spin-slow': 'spin 8s linear infinite'
            },
        },
        plugins: [],
    }
}
