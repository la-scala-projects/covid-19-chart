import moment from 'moment';

const parseDates = (dates) => {
  const newDates = dates.map((date) => moment(date, 'MM-DD-YYYY').format('LL'));
  return newDates;
};

export { parseDates };
