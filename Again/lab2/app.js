const http=require('http');
const router=require('./route1');
const server=http.createServer(router);

const port=3554;
server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})