const http = require("http");

class EchoServer
{
    constructor()
    {
        this.serverPort = isNaN(process.env["npm_package_config_port"]) ?
            8080 :
            process.env["npm_package_config_port"];
        
        this._server = http.createServer((request, response) =>
        {
            response.writeHead(200, {
                "Content-Type": "text/html" 
            });
            
            response.end(this._renderPage(request));
        });
    }
    
    start()
    {
        this._server.listen(this.serverPort);
    }
    
    stop()
    {
        this._server.close();
    }
    
    _renderPage(request)
    {
        return `<html>
<head>
    <title>HTTP Echo Path</title>
<head>
<body>
    <h1>HTTP Echo Path Results</h1>
    <ul>
        <li><b>HTTP Version:</b> ${request.httpVersion}</li>
        <li><b>Method:</b> ${request.method}
        <li><b>Url:</b> ${request.url}</li>
        <li><b>Request Headers:</b> ${this._renderObjectToList(request.headers)}</li>
    </ul>
</body>
</html>`;
    }
    
    _renderObjectToList(obj)
    {
        var key, value;
        var output = "<ul>\n";
        for (key in obj)
        {
            if (!obj.hasOwnProperty(key))
                continue;
            value = obj[key].toString();
            output += `<li><b>${key}:</b> ${value}</li>\n`
        }
        output += "</ul>\n";
        return output;
    }
}

module.exports = EchoServer;
exports = EchoServer;