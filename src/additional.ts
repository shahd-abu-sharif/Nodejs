
/* i want to explain this additional file on Task6 is an additional for the ease result representation of the server responses , but i used 'text/html' 
the diffrence between this file and Task6.ts is that this file will return HTML responses instead of JSON responses, which makes it easier to visualize the output in a web browser.
also adding button to navigate between home , about and 404 pages 
>>>>> (i know 404 button seems suspisious 😂 but i just want to show how to handle 404 page in the server)
*/
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
    console.log('waiting for your feedback ENG.Yaqoob...')
});


