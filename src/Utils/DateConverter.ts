import moment from "moment";

export const formatDate = (dateString: string) => {
  const inputDate = moment(dateString, "YYYY-MM-DD");
  const today = moment();
  const tomorrow = moment().add(1, "days");
  const yesterday = moment().subtract(1, "days");

  if (inputDate.isSame(today, "day")) {
    return "TODAY";
  } else if (inputDate.isSame(tomorrow, "day")) {
    return "TOMORROW";
  } else if (inputDate.isSame(yesterday, "day")) {
    return "YESTERDAY";
  } else {
    return inputDate.format("D MMMM, YYYY");
  }
};

export const checkDateStatus = (dateString: string) => {
  const inputDate = moment(dateString, "YYYY-MM-DD");
  const today = moment();

  if (inputDate.isBefore(today, "day")) {
    return "danger";
  } else {
    return "normal";
  }
};
