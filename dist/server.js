"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
app.use(cors_1.default());
app.get("/", function (req, res) {
    res.json({ message: "api is working" });
});
// app.use('/api/branches/', BankRouter);
app.listen(process.env.PORT, function () {
    console.log("Server running at port " + process.env.PORT);
});
//# sourceMappingURL=server.js.map