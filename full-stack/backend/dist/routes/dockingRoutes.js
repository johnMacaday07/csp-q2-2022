"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dockingController_1 = __importDefault(require("../controllers/dockingController"));
const router = express_1.default.Router();
router.post("/dock", dockingController_1.default.transformTransaction);
exports.default = router;
