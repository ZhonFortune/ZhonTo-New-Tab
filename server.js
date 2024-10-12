#!/usr/bin/env node
// 部署前端服务器
var express = require('express');
var app = express();
var path = require('path');
const childProcess = require('child_process');
// 设置URL
var port = 5080;
var host = '127.0.0.1'
// 设置静态文件目录
const staticPath = path.join(__dirname, './dist/');
// 指定静态文件目录
app.use(express.static(staticPath));
// 监听端口
app.listen(port, host, () => {
    console.log(`Welcome to use ZhonTo-New-Tab program`)
    console.log(`Version: 0.2.6`)
    console.log(`https://github.com/ZhonFortune/ZhonTo-New-Tab`)
    console.log(`----------------------------`)
    console.log(``)
    console.log(`Server is running at http://${host}:${port}/`)
    console.log(``)
})
childProcess.exec(`start http://${host}:${port}/`)
