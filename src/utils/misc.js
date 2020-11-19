const getWeekDaysArray = (start, end) => {
  for (
    var arr = [], dt = new Date(start);
    dt <= end;
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
};

export const generateDates = () => {
  const today = new Date();
  const inTwoMonths = new Date();
  inTwoMonths.setMonth(inTwoMonths.getMonth() + 2);
  const daylist = getWeekDaysArray(today, inTwoMonths);
  return daylist.map((v) => v.toISOString().slice(0, 10));
};
