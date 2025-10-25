const http=require('http');

const  server=http.createServer((req,res)=>{
  console.log("All req ",req.method,req.headers,req.url);
  res.setHeader("Content-type","text.html");
  console.log("My name is mohit sankhyan");
  res.end("My name is mohit sankhyan and i am not come tomarow");
});

const port=5454;

server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})