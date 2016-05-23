# HTTP Echo Path

A little server to help debugging HTTP routing, URL Rewrites, redirects, proxies, etc.
Takes a request at the configured port and responds with a simple HTML page with some
debugging information.

> I made this in my spare time. If anyone finds that useful, I usually pretty good about
responding to support requests on GitHub, but I release this without any warranty or
guarantee of fitness for a purpose.

## Configuration

Configuration can be set from package.json, or by setting environment variable overrides.

```js
{
    "config":
    {
        "port": 8080
    }
}
```

```bash
npm_package_config_port=8081 node index.js
```

## Use as a Library

Really just so that it makes sense to publish to npm, you can use this project as a library.

```
npm install http-echo-path
```

```js
var EchoServer = require("http-echo-path");

var server = new EchoServer();
server.start();

...

//When you want to stop it later...
server.stop();
```
        
[MIT License](LICENSE)