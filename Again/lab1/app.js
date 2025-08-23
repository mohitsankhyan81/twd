const http=require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  res.setHeader("Content-type","text/html");
  console.log("my name is mohit sankhyan");
  res.end("my name is mohit sankhyan");
});

const port=4566;

server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})