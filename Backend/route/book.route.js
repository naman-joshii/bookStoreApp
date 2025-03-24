import express from "express";
import { getBook } from "../controller/book.conroller.js";

const router = express.Router();

router.get("/", getBook);


export default router;