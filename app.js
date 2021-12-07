const chalk  = require("chalk");
const validate = require("validator");
const http = require("http");
const port = 3000;


const server = http.createServer(function(req, res){
    res.write("Hey there");
    res.end();
});

server.listen(port, function(error){
    if(error)
    {
        console.log(chalk.red.inverse("Error making connection to Server.", error))
    }
    else
    {
        console.log(chalk.green.inverse("Server is listening on port " + port))
    }
})


var result = validate.isEmail("bilalhyder2001@gmail.com");

console.log(result? chalk.green.inverse(result) : chalk.red.inverse(result));


