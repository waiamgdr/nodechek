
const fs=require('fs')
// Create a file named "welcome.txt" with content "Hello Node"
fs.writeFile('welcome.txt','Hello Node',()=>{
    console.log('fil')
})
// Read and console.log data from "hello.txt"
fs.readFile('hello.txt','utf-8',(err,data)=>{
console.log(data)
})
