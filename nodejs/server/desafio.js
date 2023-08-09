const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
    if (req.url === "/static/estilo.css"){

        fs.readFile("./static/estilo.css", "UTF-8", (err, content) => {
            if (err) {
                res.writeHead(400)
                throw err
            }
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(content)
        })
    }
    else if(req.url === "/static/index.html"){
        fs.readFile("./static/index.html", "UTF-8", (err, content) => {
            if (err){
                res.writeHead(400)
                throw err
            }
            res.end(content)
        })
    }
    else if (req.url === "/static/logo.png"){
        res.writeHead(200, {"Content-Type": "image/jpeg"})
        fs.createReadStream("./static/logo.png").pipe(res)
    }
    else if (req.url === "/static/hello.js"){
        res.writeHead(200, {"Content-Type": "text/javascript"})
        fs.createReadStream("./static/hello.js", "UTF-8").pipe(res)
    }
    else {
        res.writeHead(400, {"Content-Type": "text/html"})
        fs.readFile("./static/404.html", "UTF-8", (err, content) => {
            if(err) throw err
            res.end(content)
        })
    }

}).listen(3000)

console.log("servidor rodando na porta 3000 \n http://localhost:3000")