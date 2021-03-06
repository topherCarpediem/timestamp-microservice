"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./controllers");
var app = express_1.default();
app.use('/api/timestamp', controllers_1.TimeStampController);
app.use('/api/whoami', controllers_1.WhoAmIController);
app.use('/api/shorturl', controllers_1.UrlShortenerController);
exports.default = app;
