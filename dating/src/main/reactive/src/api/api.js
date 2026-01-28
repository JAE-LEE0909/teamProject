// src/api/api.js
// api 요청 주소 모음


import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // withCredentials: true, // 쿠키 기반 인증을 쓸 때만 사용
  timeout: 10000,
});

export default api;

/*
 * TODO (Interceptor 예정)
 *
 * 목적:
 * - 모든 API 요청에 Authorization 헤더(JWT) 자동 첨부
 * - 401(토큰 만료) 발생 시 공통 처리 (로그아웃 or 로그인 페이지 이동)
 * - 403/500 에러 메시지 공통 처리
 *
 * 구현 아이디어:
 * api.interceptors.request.use((config) => {
 *   const token = localStorage.getItem("accessToken");
 *   if (token) {
 *     config.headers.Authorization = `Bearer ${token}`;
 *   }
 *   return config;
 * });
 *
 * api.interceptors.response.use(
 *   (res) => res,
 *   (err) => {
 *     if (err.response?.status === 401) {
 *       // 토큰 만료 처리
 *     }
 *     return Promise.reject(err);
 *   }
 * );
 *
 * 다시 구현할 때:
 * - ChatGPT에게 "axios interceptor 붙이는 부분 다시 설명해줘" 라고 물어보기
 */
