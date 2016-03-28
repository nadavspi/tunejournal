import React from 'react';
import SelectLists from './SelectLists';
import { Link } from 'react-router';
import { latestDate } from '../utils';

const Row = ({ tune }) => (
  <tr>
    <td>
      <Link to={`/tune/${tune.id}`}>
	{tune.name}
      </Link>
    </td>
    <td>
      {tune.composer}
    </td>
    <td>
      {tune.year}
    </td>
    <td>
      {latestDate(tune.practiceDates)}
    </td>
    <td>
      <SelectLists tune={tune} />
    </td>
  </tr>
);

const TuneTable = ({ tunes }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Composer</th>
        <th>Year</th>
        <th>Last Practiced</th>
        <th>Lists</th>
      </tr>
    </thead>
    <tbody>
      {tunes.map(tune => <Row key={tune.id} tune={tune} />)}
    </tbody>
  </table>
);

export default TuneTable;
