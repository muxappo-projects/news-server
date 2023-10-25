import moment from "moment";

export function dateAndTime(input) {
  return moment(input).format(`Do MMMM YYYY | h:mm a`);
}

export function date(input) {
  return moment(input).format("Do MMMM YYYY");
}
