const http = require('http');

const html = `
   <!doctype>
   <html>
    <head>
      <meta charset="utf-8">
      <title> Repair</title>
      <link rel="stylesheet" href="app.css>
    </head>  

    <body>
       <h1> Node.js server</h1>
       <button> Click me</button>

       <script src="app.js></script>
    </body>
   </html>`;

const css = `
    body {
            margin: 0;
            padding: 0;
            text-align: center:
        }    
        
        h1 {
            background-color: #43853d;
            color: white;
            padding: .5em;
            font-family: 'Consolas';
        }

`;
            
const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js action'));

`;

http.createServer((req, res) => {
    switch(req.url){
        case '/':
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(html);
            
        case '/app.css':
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.end(css); 
            
        case '/app.js':
          res.writeHead(200, {'Content-Type': 'text/js'});
          res.end(js); 
            
        default: 
           res.writeHead(200, {'Content-Type': 'text/html'});
          res.end('404 not found'); 
    }
    
}).listen(3000, () => console.log('Server work'));