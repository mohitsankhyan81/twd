const http=require('http');

const server=http.createServer((req,res)=>{
  console.log("all req ",req.url,req.method,req.headers);
  res.setHeader("Content-type","text/html");
  console.log("My name is mohit sankhyan");
  res.end("my name is mohit sankhyan and and am not go to collage tomarrow");
});

const port=3543;

server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})