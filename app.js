const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveAway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

// get a giveaway date
const futureDate = new Date(2024, 04, 24, 8, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month - 1];

let futureday = futureDate.getDay();
futureday = weekdays[futureday - 1];

giveAway.textContent = `Giveaway Ends On ${futureday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;
