// importar dependencias:
const express = require("express");
const cors = require("cors");

/*console.log(
  "Hi everyone! I´m Denise, Jr. Developer looking for mi first opportunity =)"
);*/
 
var count = 0;

function countFunction() {
  console.log(count);
  count = count + 1;
  if (count == 0) {
    console.log("The gun is chargin...");
  }
  if (count == 1) {
    console.log("Are you ready to loose?");
  }
  if (count == 2) {
    console.log("You should run...");
  }
  if (count == 3) {
    console.log("Are you sure that will stay here? I can be dangerous...");
  }
  if (count == 4) {
    console.log("Shooting!!!!");
  }

  if (count >= 5) {
    count = 0;
  }
}

setInterval(function () {
  countFunction();
}, 1000);

module.exports = {countFunction, count};