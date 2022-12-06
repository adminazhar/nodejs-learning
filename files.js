const fs = require('fs');
// reading files
fs.readFile('./docs/notes.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

//writing files


//directories


//deleting files