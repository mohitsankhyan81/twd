const http=require('http');
const router=require('./routers');
const server=http.createServer(router);

const port=4254;

server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});