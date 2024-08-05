const http = require("http")

http.createServer((req,res)=>{
    res.write("<h1>hi, hello, how are you </h1>")
    res.end()
}).listen(8000);