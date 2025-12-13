// src/main/frontend/src/setProxy.js
//이부분에 정상적인 코드 안들어오면 실행은 되는데 local에서 팅김

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
      pathFilter: '/main'
    })
  );
  app.use(
      createProxyMiddleware({
        target: 'http://localhost:8080/',
        changeOrigin: true,
        pathFilter: '/api/hello'
      })
    );
};