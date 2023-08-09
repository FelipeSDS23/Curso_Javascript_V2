const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {

    
     
    fs.readFile("./index.html", "UTF-8", (err, html) => {
        if(err){
            res.writeHead(500)
            res.end("<h1>Deu erro</h1>")
        }
        res.end(html)
        res.writeHead(200, {"Content-Type": "text/html"})
    })

}).listen(3000)

console.log("servidor rodando na porta 3000 \n http://localhost:3000")