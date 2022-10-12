import express, { Router } from "express";
import dockingController from "../controllers/dockingController";

const router: Router = express.Router();

router.post("/dock", dockingController.transformTransaction);

export default router;
