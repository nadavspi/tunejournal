import relativeDate from 'relative-date';
import moment from 'moment';

export const latestDate = (dates) => {
  if (!dates || !dates.length) {
    return null;
  }

  const latest = dates.sort((a, b) => moment(a.date).isBefore(b.date) ? -1 : 1)[0];

  return moment(latest).fromNow();
};
