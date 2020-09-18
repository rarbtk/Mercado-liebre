var express = require('express');
var app = express();
let path = require('path');

app.get('/', function(req, res) {
    let file = path.resolve("MercadoLiebre.html");
  
    res.sendFile(file);
});



app.get("*", function(req,res){
    if(req.url.includes(".")){
        
        let file = path.resolve("./"+ req.url)
        return res.sendFile(file)
    }
    
})



app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
