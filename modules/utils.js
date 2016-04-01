import moment from 'moment';
import sortBy from 'sort-by';

export const calendarDate = date => moment(date).calendar();

export const lastDate = tune => {
  if (!tune || !tune.notes || !tune.notes.length) {
    return null;
  }

  const lastNote = tune.notes.sort(sortBy('-createdDate'));

  return calendarDate(lastNote.createdDate);
}
