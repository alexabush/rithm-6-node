const fs = require('fs');

fs.readFile('./corporate.txt', function(err, text) {
  for (let i = 1; i <= 5; i++) {
    console.log(`Writing ${i}`);
    fs.writeFile(`./copy${i}.txt`, text, function(err) {
      if (err) {
        console.log(err);
        return process.exit(1);
      }
      console.log(`File ${i} has been written`);
    });
  }
});
