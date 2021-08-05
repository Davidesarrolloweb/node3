
const express = require ('express');
const app = express();

let recibida = {ok: true, message: 'Recibido!'};
let despedida = {ok:true, message: 'Adios!'};

app.get("/", function(request, response){

    console.log('Peticion recibida del cliente')
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]); 
    response.send(JSON.stringify(recibida));
})

app.get("/bye", function(request, response){

    console.log('Peticion recibida del cliente')
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    response.send(JSON.stringify(despedida));
})

app.listen(4000);