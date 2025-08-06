export const {createServer} = require('http');

 const server = createServer( (request , response)=>{
    response.setHeader('Content-Type' , 'application/json')

    if(request.method === 'GET' && request.url === '/'){
        response.writeHead(200)
        response.write(JSON.stringify({message :'Welcome to the sever'}))
        return response.end()
    }


    if(request.method === 'GET' && request.url ==='/about'){
        response.writeHead(200) 
        response.write(JSON.stringify({ message: "This is the about route" }))
        return response.end()

    }


    response.writeHead(404)
    response.write(JSON.stringify({ error: "Route not found" }))
    return response.end()

});

server.listen(3000 , ()=>{
    console.log(`Server is running on http://localhost:3000`);
    
});








