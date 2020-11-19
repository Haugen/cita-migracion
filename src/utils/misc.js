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
  const daylist = getWeekDaysArray(new Date(), new Date('2020-12-31'));
  return daylist.map((v) => v.toISOString().slice(0, 10));
};
