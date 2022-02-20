const locale = "ua-UA";

function convertDate(dateStr) {
  const [day, month, year] = dateStr.split("/");
  let date = new Date(year, month - 1, day);

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString(locale, options);
}

export default convertDate;
