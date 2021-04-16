"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.json({ message: "api is working" });
});
app.listen(3000, function () {
    console.log("Server running at port 3000");
});
//# sourceMappingURL=server.js.map