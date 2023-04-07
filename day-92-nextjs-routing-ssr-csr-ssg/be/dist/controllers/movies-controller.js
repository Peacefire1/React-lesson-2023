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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetails = exports.getMovies = void 0;
const movies_model_1 = __importDefault(require("../models/movies.model"));
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 0;
    const moviesPerPage = Number(req.query.moviesPerPage) || 25;
    try {
        const movies = yield movies_model_1.default
            .find({})
            .limit(moviesPerPage)
            .skip(moviesPerPage * page);
        res.status(200).json(movies);
    }
    catch (error) {
        console.log("aldaa");
        res.status(404).json({ data: [] });
    }
});
exports.getMovies = getMovies;
const getDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const page: number = Number(req.query.page) || 0;
    // const deatailsPage: number = Number(req.query.deatailsPage) || 25;
    const { id } = req.params;
    try {
        const details = yield movies_model_1.default.findOne({ _id: id });
        res.status(200).json(details);
    }
    catch (error) {
        console.log("aldaa");
        res.status(404).json({ data: [] });
    }
});
exports.getDetails = getDetails;
