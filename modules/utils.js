import moment from 'moment';

export const latestDate = (dates) => {
  if (!dates || !dates.length) {
    return null;
  }

  const latest = dates.sort((a, b) => moment(a.date).isBefore(b.date) ? -1 : 1)[0];

  return latest;
};

export const relativeDate = date => moment(date).fromNow();

export const calendarDate = date => moment(date).calendar();
