import React from 'react';

const Note = ({ note, onChange }) => (
  <li>
    {note.date}
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
    notes: React.PropTypes.array,
  },

  getDefaultProps() {
    return {
      notes: [],
    };
  },

  handleChange(id, content) {
    console.log(id, content);
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
	       key={note.id}
	       note={note}
	     />
	   ))}
        </ul>
      </div>
    );
  }
});
