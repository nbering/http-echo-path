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
        
[MIT License](LICENSE)