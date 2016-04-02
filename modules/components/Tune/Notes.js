import React from 'react';
import { calendarDate } from '../../utils';

const Note = ({ onDelete, note, onChange }) => (
  <li>
    <h4>{calendarDate(note.createdDate)}</h4>
    <button
      type="button"
      onClick={onDelete}
    >
      Delete
    </button>
    <div>
      <label htmlFor={`note-${note.id}`}>Note</label>
      <textarea
        cols="30"
        id={`note-${note.id}`}
        onChange={onChange}
        rows="10"
        value={note.content}
      />
    </div>
  </li>
);

export default React.createClass({
  propTypes: {
    deleteNote: React.PropTypes.func.isRequired,
    notes: React.PropTypes.array,
    tuneId: React.PropTypes.string.isRequired,
    updateNote: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      notes: [],
    };
  },

  componentDidUpdate(prevProps) {
    if (this.props.notes.length != prevProps.notes.length) {
      // let's focus on the first textarea somehow
    }
  },

  handleChange(id, content) {
    const { tuneId } = this.props;

    this.props.updateNote({
      content,
      id,
      tuneId,
    });
  },

  handleDelete(id) {
    const { tuneId } = this.props;

    this.props.deleteNote({
      tuneId,
      id,
    });
  },

  render() {
    const { notes } = this.props;

    return (
      <div>
        <h3>Notes</h3>
        <ul>
          {notes.map(note => (
             <Note
               onChange={e => this.handleChange(note.id, e.target.value)}
               onDelete={this.handleDelete.bind(null, note.id)}
               key={note.id}
               note={note}
             />
           ))}
        </ul>
      </div>
    );
  }
});
