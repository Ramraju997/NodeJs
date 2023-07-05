const fs = require("fs");
/* fs.writeFile("textMessage.txt", "Hello World", (err)=> {
    if(err) throw err;
    console.log("The file has been saved");
}) */

fs.readFile("./textMessage.txt",'utf8',(err, data) => {
    if(err) throw err;
    console.log(data);
})