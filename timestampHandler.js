// moment library
let moment = require("moment");

// set export as function
module.exports = function(timeInput) {
  let unixDate;
  let naturalDate;

  // set natural and unix date formats from input
  let newTime = timeInput;
  console.log("newTime: ", newTime);
  let numTime = parseInt(timeInput);
  console.log("numTime: ", numTime);

  if (moment(newTime).isValid()) {
    naturalDate = moment(newTime).format("MMMM Do YYYY");
    let newDate = moment(newTime).unix();
    unixDate = newDate;
    console.log("naturalFires");
    console.log(newTime);
  } else if (typeof numTime == "number") {
    if (!isNaN(numTime)) {
      unixDate = numTime;
      naturalDate = moment(unixDate * 1000).format("MMMM Do YYYY");
      console.log("unixfires");
      console.log(numTime);
    }
    // reject bad input
  } else if (unixDate == "undefined" || naturalDate == "undefined") {
    naturalDate = "null";
    unixDate = "null";
    console.log("nullard");
  }

  if (unixDate === undefined || naturalDate === undefined) {
    naturalDate = "null";
    unixDate = "null";
    console.log("nullard");
  }

  // construct timeObject from inputs
  let timeObject = {
    "natural time": `${naturalDate}`,
    "unix time": `${unixDate}`
  };

  return timeObject;
};
