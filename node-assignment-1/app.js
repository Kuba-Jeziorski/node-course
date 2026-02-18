const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Greetings</h1>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create new</button></form>',
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const userName = parsedBody.split("=")[1];
      console.log(userName);
      return res.end();
    });
  }

  if (url === "/create-user") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Thanks for filling the form</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(3000);
