/// <reference path="typings/main.d.ts" />

var EchoServer = require("./lib/EchoServer.js");

var server = new EchoServer()
server.start();

process.on("SIGINT", () =>
{
    server.stop();
});