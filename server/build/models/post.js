"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    name: { type: "string", required: true },
    prompt: { type: "string", required: true },
    photo: { type: "string", required: true },
});
exports.Post = mongoose_1.default.model("Post", PostSchema);
