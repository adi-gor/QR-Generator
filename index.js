import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
        message: "Type your URL",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("url.png"));
    fs.appendFile("url.txt", url, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("file created successfully");
        }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });