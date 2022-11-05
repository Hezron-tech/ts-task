"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { x, y, operation_type } = req.body;
        if (!operation_type || !x || !y) {
            res.status(400).send("Enter corrects inputs ");
        }
        const intX = Number(x);
        const intY = Number(y);
        let result;
        if (operation_type == "addition") {
            result = intX + intY;
        }
        else if (operation_type == "subtraction") {
            result = intX - intY;
        }
        else if (operation_type == "multiplication") {
            result = intX * intY;
        }
        const outResult = {
            slackUsername: "Hezron Kiprop",
            operation_type,
            result
        };
        return res.json(outResult);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = router;
