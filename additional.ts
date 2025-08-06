export const { createServer } = require('http')

const server = createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the server</h1>
                    <a href="/about"><button>About</button></a>
                    <a href="/notfound"><button>404 Page</button></a>
                </body>
            </html>
        `)
        return;
    }

    if (request.method === 'GET' && request.url === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>This is the about route</h1>
                    <a href="/"><button>Home</button></a>
                    <a href="/notfound"><button>404 Page</button></a>
                </body>
            </html>
        `)
        return;
    }

    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`
        <html>
            <head><title>404 Not Found</title></head>
            <body>
                <h1>404 - Route not found</h1>
                <a href="/"><button>Go Home</button></a>
            </body>
        </html>
    `)
});

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
});


