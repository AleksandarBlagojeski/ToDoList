//jshint esversion:6
module.exports.getDate = getDate;

function getDate(){

let today = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};

//var currentDay = today.getDay();

  return today.toLocaleDateString("de-DE", options);
}

module.exports.getDay = getDay;


function getDay(){

let today = new Date();

let options = {
  weekday: "long";
};

//var currentDay = today.getDay();

  return today.toLocaleDateString("de-DE", options);

}
