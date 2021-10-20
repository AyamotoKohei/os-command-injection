'use strict';
/**
 * httpモジュールの読み込み
 */
const http = require('http');

/**
 * child_processモジュールの読み込み
 */
const cp = require('child_process');

/**
 * HTTPサーバの作成
 */
const server = http.createServer((req, res) => {
    const path = req.url;
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end(cp.execSync(`echo ${path}`));
});

/**
 * ローカルホストに接続したときにログを出力
 */
const port = 8000;
server.listen(port,() => {
    console.info(`Listening on ${port}`);
})