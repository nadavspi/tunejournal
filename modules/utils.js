import moment from 'moment';
import sortBy from 'sort-by';

// Probably move these to a date helper file
export const calendarDate = date => moment(date).calendar();

export const lastDate = tune => {
  if (!tune || !tune.notes || !tune.notes.length) {
    return null;
  }

  const lastNote = tune.notes.sort(sortBy('-createdDate'));

  return calendarDate(lastNote.createdDate);
}

// Reject fetch promise on HTTP error
export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export const parseJSON = response => response.json();

export const authAndFetch = (nextState, replace) => {
  console.log('auth and fetch');
};
