import express from "express";
import ueaService from "../services/ueaService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(ueaService.getUeas());
});

export default router;
