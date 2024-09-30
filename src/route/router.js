import { Router } from "express";
import {
  createClient,
  createProduct,
  getClients,
  getProducts,
} from "../controller/controller.js";

const router = Router();

router.get("/client", getClients);
router.post("/client", createClient);

router.get("/product", getProducts);
router.post("/product", createProduct);

export default router;
