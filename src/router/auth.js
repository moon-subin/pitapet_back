import express from "express";
import join from "../controller/auth/join.js"
import refresh from "../controller/auth/refresh.js"
import login from "../controller/auth/login.js"
import kakao from "../controller/auth/kakao.js"
import { naver_callback,naver_login,naver_token } from "../controller/auth/naver.js";
export const router = express.Router();


//POST /api/user/login
router.post('/login', login);

//POST /api/user/join
router.post('/join',join);

//GET /api/user/refresh
router.get('/refresh',refresh);

//POST /api/user/kakao
router.post('/kakao',kakao);

//POST /api/user/naver/login
router.get('/naver/login',naver_login);

//POST /api/user/naver/callback
router.get('/naver/callback',naver_callback);

//POST /api/user/naver/token
router.post('/naver/token',naver_token);

export default router;