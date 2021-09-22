const fs = require('fs');
const Mustache = require('mustache');
const json = require('./config.json');

let counter = 1;
let data = { ...json };

data.style = function () {
  let bgColor = "";
  if(counter%2 === 0) {
    bgColor = "background-color: rgba(76, 76, 76, 0.02)"
  } else {
    bgColor = "background-color: rgba(76, 76, 76, 0.1)";
  }

  counter++;
  return bgColor;
}

let rendered = "";

try {
  const template = fs.readFileSync('./template.mustache','utf8');
  rendered = Mustache.render(template, data);
} catch (err) {
  console.log(err);
}

try {
  fs.writeFileSync('./result.html', rendered);
  //file written successfully
} catch (err) {
  console.error(err)
}
