const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
    const digits = req.body.digits;
    const numbers = req.body.numbers;
    const names = req.body.names;

    res.status(200).json({
        message: 'POST received',
        digits: digits,
        numbers: numbers,
        names: names
    });

});

module.exports = router;