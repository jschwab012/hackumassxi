import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use('/', express.static('src'))
app.listen(port, () => console.log(`server is running`))


app.get(`/test`, async(request, response) => {
  const htmlResponse = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirected Page</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 50px;
      }
      h1 {
        color: #3498db;
      }
      p {
        color: #2ecc71;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to the Redirected Page</h1>
    <p>This is a different page with new HTML/CSS elements.</p>
    
    <!-- Button to trigger redirection -->
    <button onclick="redirectToTestPage()">Go to /test</button>

    <script>
      // Function to redirect to the /test page
      function redirectToTestPage() {
        window.location.href = '/test';
      }
    </script>
  </body>
  </html>
`;
response.send(htmlResponse);
})

app.get(`/`, async(request, response) => {
  response.sendFile(path.join(__dirname, 'src/client.html'));
})

