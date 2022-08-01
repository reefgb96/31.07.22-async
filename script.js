"use strict";

//---- Task 1(A) ----\\

const stopperDiv = document.querySelector("#stopperWrapper");
const stopTimerBtn = document.querySelector("#stopTimerBtn");

let counter = 0;
let stopWatch = setInterval(() => {
  counter++;
  stopperDiv.innerHTML = `<h5>Time passed since loading: ${counter}</h5>`;
}, 1000);

//---- Task 1(B) ----\\

stopTimerBtn.addEventListener("click", () => {
  clearInterval(stopWatch);
});

//---- Task 2 ----\\

const clockDiv = document.querySelector("#clockDiv");

let getClock = () => {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;

  clockDiv.innerHTML = `<h4>Local Time in Israel ${hours}:${minutes}:${seconds}</h4>`;
};
let clock = setInterval(getClock, 1000);

//---- Task 3 ----\\

setTimeout(() => {
  alert("alert after 5 seconds.");
}, 5000);

//---- Task 4 ----\\

const paragraph = document.querySelector("#paragraph");
const bgColorBtn = document.querySelector("#bgChangeBtn");
const colorArr = ["lightgreen", "lightblue", "lightsalmon", "yellow", "purple"];

bgColorBtn.addEventListener("click", () => {
  let randNum = Math.floor(Math.random() * colorArr.length);
  paragraph.style.backgroundColor = colorArr[randNum];
});

//---- Optional ----\\
//---- Task 5 ----\\
const page = document.querySelector("#body");

setInterval(() => {
  let randNum = Math.floor(Math.random() * colorArr.length);
  page.style.backgroundColor = colorArr[randNum];
}, 1000);

//---- Task 6 ----\\
// in HTML
