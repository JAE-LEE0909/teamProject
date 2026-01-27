// src/api/api.js
// api 요청 주소 모음


import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
  // withCredentials: true, // 쿠키 기반 인증을 쓸 때만 사용
  timeout: 10000,
});

export default api;
