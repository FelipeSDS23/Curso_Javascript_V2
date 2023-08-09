const http = require("http")
const fs = require("fs")
const path = require("path")

const getStaticFile = (_path, type, res) => {
    if(!fs.existsSync(_path)){
        res.writeHead(404)
        console.log(_path, "não existe")
        if(type === "text/html"){
            _path = path.join(__dirname, "static", "404.html")
        } else {
            return res.end()
        }
    } else {
        res.writeHead(200, {"content-type": type})
    }

    fs.createReadStream(_path).pipe(res).on("error", () => {
        res.writeHead(500)
        res.end()
    }).on("finish",() => {
        console.log("finish")
    })

}

const mimetype = {
    "css": "text/css",
    "html": "text/html",
    "png": "image/png",
    "js": "aplication/javascript"
}

const serverStaticFile = (url, res) => {
    const _path = path.join(__dirname, "static", url)
    const extname = path.extname(url).substring(1)
    // console.log(_path)
    // console.log(extname)
    // res.end("teste")
    getStaticFile(_path, mimetype[extname], res)
}

http.createServer((req, res) => {
    let url = req.url
    if(url === "/"){
        url = "/index.html"
    }
    if(url === "/favicon.ico"){
        res.end()
    }

    serverStaticFile(url, res)

}).listen(3001)