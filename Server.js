// using HTTP module
const http = require('http');
//create server 
const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
  }).listen(3000,()=>{
    console.log("server is running in port 3000")
  })