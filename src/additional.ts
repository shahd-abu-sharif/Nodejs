/* i want to explain this additional file on Task6 is an additional for the ease result representation of the server responses 
i used 'text/html' also used appllication/json for the API responses , so you will see the difference between the HTML and JSON responses

the diffrence between this file and (Task6.ts) is that this file will return HTML responses also JSON responses, which makes it easier to visualize output in browser
also adding buttons to navigate between home , about and 404 pages 
>>>>> (i know 404 button seems suspisious 😂 but i just want to show how to handle 404 page in the server)
*/

export const { createServer } = require('http')

const server = createServer((request, response) => {
    
    // home (main)
    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the server</h1>
                    <a href="/"><button>home</button></a>
                    <a href="/about"><button>about</button></a>
                    <a href="/contact"><button>contact</button></a>
                    <a href="/notfound"><button>404 page</button></a>
                    <br><br>
                     <button onclick="fetchJson()">show json response</button>
                    <pre id="json"></pre>
                    <script>
                        function fetchJson() {
                            fetch('/api/home')
                                .then(res => res.json())
                                .then(data => {
                                    document.getElementById('json').textContent = JSON.stringify(data);
                                });
                        }
                    </script>
                </body>
            </html>
        `)
        return;
    }

    // about 
    if (request.method === 'GET' && request.url === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>This is the about route</h1>
                    <a href="/"><button>home</button></a>
                    <a href="/about"><button>about</button></a>
                    <a href="/contact"><button>contact</button></a>
                    <a href="/notfound"><button>404 page</button></a>
                    <br><br>
                    <button onclick="fetchJson()">show json response</button>
                    <pre id="json"></pre>
                    <script>
                        function fetchJson() {
                            fetch('/api/about')
                                .then(res => res.json())
                                .then(data => {
                                    document.getElementById('json').textContent = JSON.stringify(data);
                                });
                        }
                    </script>
                </body>
            </html>
        `)
        return;
    }

    // contact 
    if (request.method === 'GET' && request.url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(`
            <html>
                <head><title>Contact</title></head>
                <body>
                    <h1>This is the contact route</h1>
                    <a href="/"><button>home</button></a>
                    <a href="/about"><button>about</button></a>
                    <a href="/contact"><button>contact</button></a>
                    <a href="/notfound"><button>404 page</button></a>
                    <br><br>
                     <button onclick="fetchJson()">show json response</button>
                    <pre id="json"></pre>
                    <script>
                        function fetchJson() {
                            fetch('/api/contact')
                                .then(res => res.json())
                                .then(data => {
                                    document.getElementById('json').textContent = JSON.stringify(data);
                                });
                        }
                    </script>
                </body>
            </html>
        `)
        return;
    }

    

    // json home api
    if (request.method === 'GET' && request.url === '/api/home') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: 'Welcome to the server' }));
        return response.end()
    }

    // json about api
    if (request.method === 'GET' && request.url === '/api/about') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: 'This is the about route' }));
        return response.end()
    }

    // json contact api
    if (request.method === 'GET' && request.url === '/api/contact') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: 'This is the contact route' }));
        return response.end()
    }

    // not found 404
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
    return;
});

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
    console.log('waiting for your feedback ENG.Yaqoob...') 
})
