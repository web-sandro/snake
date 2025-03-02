const gameModel = require("../models/gameModel");

exports.renderGame = (req, res) => {
    const gameData = gameModel.initializeGame();
    res.render("index", { gameData });
};
