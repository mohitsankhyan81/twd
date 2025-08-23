const http=require('http');
const routers=require('./routers');
const server=http.createServer(routers);

const port=5465;
server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});