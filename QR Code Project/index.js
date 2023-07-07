/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer  from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'

var userPromt = inquirer
.prompt([
    {
    message : "Type in your url",
    name: "Url"
}
])
.then((answers) => {
    const url = answers.Url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-img1.png'));
    fs.WriteStream("url.text", url, (err)=> {
        if(err) throw err;
        console.log("File has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
