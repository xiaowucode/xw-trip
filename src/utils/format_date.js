import dayjs from "dayjs";

export function formateMonthDay(date) {
  return dayjs(date).format("MM月DD日");
}

export function getDiffDays(startDate, endDate) {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  return end.diff(start, "day");
}