/// <reference path="typings/main.d.ts" />

const serverPort = isNaN(process.env["npm_package_config_port"]) ?
    8080 :
    process.env["npm_package_config_port"];
    
const http = require("http");

var server = http.createServer();

server.on("request", (request , response) =>
{
   response.writeHead(200, {
      "Content-Type": "text/html" 
   });
   
   response.end(`<html>
<head>
    <title>HTTP Echo Path</title>
<head>
<body>
    <h1>HTTP Echo Path Results</h1>
    <ul>
        <li><b>HTTP Version:</b> ${request.httpVersion}</li>
        <li><b>Method:</b> ${request.method}
        <li><b>Url:</b> ${request.url}</li>
        <li><b>Request Headers:</b> ${objectToList(request.headers)}</li>
    </ul>
</body>
</html>`);
});

server.listen(serverPort);

process.on("SIGINT", () =>
{
   console.log("Stopping server...");
   server.close();
});


function objectToList(obj)
{
    var key;
    var output = "<ul>\n";
    for (key in obj)
    {
        if (!obj.hasOwnProperty(key))
            continue;
         value = obj[key].toString();
         output += `<li><b>${key}:</b>${value}</li>\n`
    }
    output += "</ul>\n";
    return output;
}