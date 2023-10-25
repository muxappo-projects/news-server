import moment from "moment";

export function dateAndTime(input) {
  const dayMonthYear = moment(input).format("Do MMMM YYYY");
  const timeOfDay = moment(input).format("h:mm a");

  return `${dayMonthYear} at ${timeOfDay}`;
}

export function date(input) {
  return moment(input).format("Do MMMM YYYY");
}
