import moment from "moment";

export function dateAndTime(input) {
  const dayMonthYear = moment(input).format("Do MMMM YYYY");
  const timeOfDay = moment(input).format("h:mm a");

  return `${dayMonthYear} at ${timeOfDay}`;
}

export function date(input) {
  return moment(input).format("Do MMMM YYYY");
}

export function commentDate(input) {
  return moment(input).format("D/MM/YY");
}

export function formatContent(word) {
  if (!word) return "";

  return word
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
