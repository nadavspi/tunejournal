import React from 'react';
import relativeDate from 'relative-date';
import AddRemove from './AddRemove';
import { Link } from 'react-router';

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
      {relativeDate(new Date(tune.datePracticed))}
    </td>
    <td>
      <AddRemove tune={tune} />
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
        <th>Add / Remove</th>
      </tr>
    </thead>
    <tbody>
      {tunes.map(tune => <Row key={tune.id} tune={tune} />)}
    </tbody>
  </table>
);

export default TuneTable;
