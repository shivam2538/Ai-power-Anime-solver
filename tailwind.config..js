module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        // Add Shadcn paths if necessary
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('shadcn/plugin')
    ],
};