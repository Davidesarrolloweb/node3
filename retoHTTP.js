 const http = require('http'); 

    let recibida = {ok: true, message: 'Recibido!'};
    let despedida = {ok:true, message: 'Adios!'};

 const server = http.createServer(function(request, response){

    console.log("Petición recibida del cliente")
    console.log("Header Request: " + request.headers["content-type"])
    console.log("Header Request: " + request.headers["content-lenght"])
    console.log("Header Request: " + request.headers["user-agent"])
    console.log("Request Method: " + request.method)
    console.log("Request URL: " + request.url)
    console.log("Response Status code: " + response.statusCode)
    response.writeHead(200,{"Content-Type" : "application/json"});
    
    if (request.url == '/bye'){

        response.write(JSON.stringify(despedida))

    }else{
        response.write(JSON.stringify(recibida))
    }   

    response.end();
});

server.listen(3000);