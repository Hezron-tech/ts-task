"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
app.use((0, express_1.json)());
app.use((0, cors_1["default"])());
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("ruuning at port" + port);
});
