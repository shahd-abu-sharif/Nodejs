/* this is the main Task6*/
export const {createServer} = require('http');

 const server = createServer( (request , response)=>{
    response.setHeader('Content-Type' , 'application/json')

    // this will handle GET/ request
    if(request.method === 'GET' && request.url === '/'){
        response.writeHead(200)
        response.write(JSON.stringify({message :'Welcome to the sever'}))
        return response.end()
    }


    // this will handle GET/about request
    if(request.method === 'GET' && request.url ==='/about'){
        response.writeHead(200) 
        response.write(JSON.stringify({ message: "This is the about route" }))
        return response.end()

    }

    // this will handle GET/contact request
    if(request.method === 'GET' && request.url ==='/contact'){
        response.writeHead(200) 
        response.write(JSON.stringify({ message: "This is the contact route" }))
        return response.end()

    }


    // this will handle 404 request (any request that is not handled)
    response.writeHead(404)
    response.write(JSON.stringify({ error: "Route not found" }))
    return response.end()

});
// this will listen to port 3000 , also log a msg shows that the server is running on the localhost:3000
server.listen(3000 , ()=>{
    console.log(`Server is running on http://localhost:3000`)
    console.log('waiting for your feedback ENG.Yaqoob...');
    
    
});








