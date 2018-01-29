var replaceStream = require("replacestream"),
  fs = require("fs"),
  path = require("path");

let global = true;

function switchFunc(data) {
  if (global) {
    global = false;
    return "-";
  } else {
    global = true;
    return "--";
  }
}

// Replace all the instances of 'birthday' with 'earthday'
fs
  .createReadStream(path.join(__dirname, "movie_lines_formatted.txt"))
  .pipe(replaceStream(/--/g, "- -"))
  .pipe(process.stdout);
