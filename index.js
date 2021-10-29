const express=require("express")
const request = require("request");
const cheerio = require("cheerio");

const app = express();              // 例項化 express 物件

const server = app.listen(3000, function () { // 啟動伺服器
  console.log('全國最小的 node.js 爬蟲上線囉'); 
});