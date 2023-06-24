import { Router } from "express";
import { handleLogin, handleRegister, logout, profile } from "../controllers/auth.controllers";
import { authRequire } from "../middlewares/validateToken";

const router = Router();

router.post("/login",handleLogin);
router.post("/register",handleRegister);
router.post("/logout",logout);

router.get("/profile",authRequire,profile);

export default router;