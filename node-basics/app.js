const http = require("http");
const routes = require("./routes");

// approach 1
// const server = http.createServer(routes);

// approach 2
// const server = http.createServer(routes.handler);

// approach 3
// const server = http.createServer(routes.handler);

// approach 4
const server = http.createServer(routes.handler);

server.listen(3000);
