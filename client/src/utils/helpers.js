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

export const dynamicSort = property => {
  let sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function(a, b) {
    if (sortOrder === -1) {
      return b[property].localCompare(a[property]);
    } else {
      return a[property].localCompare(b[property]);
    }
  };
};

export const sortByName = (a, b) => {
  if (a.staff_name < b.staff_name) {
    return -1;
  } else if (a.staff_name > b.staff_name) {
    return 1;
  } else {
    return 0;
  }
};
