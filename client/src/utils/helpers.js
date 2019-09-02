//Gets date and returns month as a string
export const mapIndexToMonth = () => {
  const date = new Date();
  const month = date.getMonth();
  const arrMonths = [
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
    "December"
  ];
  return arrMonths[month];
};
