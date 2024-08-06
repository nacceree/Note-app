import React, { useEffect } from 'react';
import { useNotes } from '../../context/Notes-contexts'; // Adjust the path as needed
import './nott.css';


const NoteList = () => {
  const { notes, fetchNotes, deleteNote } = useNotes();

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="note-list">
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>You don't have any notes yet.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id} className="note-item">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="note-actions">
                <button onClick={() => handleDelete(note._id)}>Delete</button>
                {/* You can add an Edit button here if you implement that functionality */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;