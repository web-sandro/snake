exports.initializeGame = () => {
    return {
        dotSize: 20,
        gapSize: 3,
        colors: ["yellow", "green", "purple", "red"],
        colorValues: { yellow: 1, green: 2, purple: 3, red: 0 },
        speed: 500,
    };
};
