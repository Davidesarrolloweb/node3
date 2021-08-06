
const express = require ('express');
const app = express();
app.use(express.json());

let recibida = {ok: true, message: 'Recibido!'};
let despedida = {ok:true, message: 'Adios!'};

app.get("/", function(request, response){

    console.log('Peticion recibida del cliente')
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]); 
    response.status(200).send(recibida);
})

app.get("/bye", function(request, response){

    console.log('Peticion recibida del cliente')
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    response.status(200).send(despedida);
})

app.listen(4000);