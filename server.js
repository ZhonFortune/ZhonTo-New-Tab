#!/usr/bin/env node
// 部署前端服务器 
// 默认端口5080
// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'index.html')));
// app.listen(5080, () => {
//     console.log('Welcome to use ZhonTo-New-Tab');
//     console.log('Version: Beta 0.2.3');
//     console.log('Github: https://github.com/ZhonFortune/ZhonTo-New-Tab')
//     console.log('----------------------------------------------------');    
//     console.log('Server is running at http://127.0.0.1:5080')
// });
var liveServer = require("live-server");
var params = {
    port: 5080,
    host: "127.0.0.1",
    open: true,
    file: "index.html", 
    wait: 1000,
    logLevel: 2,  
    proxy: [['/api','http://www.abc.com/api/']]
};
liveServer.start(params);
if (liveServer.start(params) == true) {
    console.log('Welcome to use ZhonTo-New-Tab');
    console.log('Version: Beta 0.2.3');
    console.log('Github: https://github.com/ZhonFortune/ZhonTo-New-Tab')
    console.log('----------------------------------------------------');    
    console.log('Server is running at http://127.0.0.1:5080')
} else {
    console.log('Error: Server Lost')
}

