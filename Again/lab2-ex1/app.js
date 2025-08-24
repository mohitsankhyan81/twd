const http = require("http");
const routers = require("./routers");

const server = http.createServer(routers);

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
