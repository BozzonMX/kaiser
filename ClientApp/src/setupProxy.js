const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: "http://localhost:5100",
        secure: false,
        headers: {
            Connection: 'Keep-Alive'
        }
    });

    app.use(appProxy);
};
