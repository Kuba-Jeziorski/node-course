const http = require("http"); // good habbit - naming the const same as an imported package
const fs = require("fs"); // file system

// function that is executed for each server request
const server = http.createServer((req, res) => {
  // process.exit(); server shuts down after the work is done - not a watch mode
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>',
    );
    res.write("</html>");
    // important return - preventing errors
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    // data event is fired when any now chunk of data is ready to be read
    const body = [];

    // req.on callbacks is executed asynchronously - even after the response code (// Response)

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // fired when req.on("data") is completed
    // needs a return to block "// Response" code to be executed
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // the new file is created (message.txt) with the content (message)
      // below line needs to be in req.on("end") body; otherwise it would be executed before the chunks arrived
      // fs.writeFileSync("message.txt", message); // blocking code (sync) - bad with big files
      fs.writeFile("message.txt", message, (err) => {
        // redirection logic
        res.statusCode = 302;
        res.setHeader("Location", "/");
        // important return - preventing errors
        return res.end();
      });
    });
  }

  // Response
  // Network -> Headers
  res.setHeader("Content-Type", "text/html");
  // Network -> Response
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
  // Using res.write()/res.setHeader() after the res.end() is causing errors
});

server.listen(3000);
