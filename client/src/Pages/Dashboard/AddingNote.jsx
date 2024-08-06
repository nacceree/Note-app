import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNotes } from '../../context/Notes-contexts'; // Adjust the path as needed
import './notes.css'

const AddingNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useUser();
  const { addNote } = useNotes(); // Use the addNote function li jaya mn context file


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newNote = {
      userId: user?.id ?? "",
      title: title,
      content: content,
    };
  
    try {
      await addNote(newNote); // Use the addNote function from context
      // Handle successful note creation
      setTitle("");
      setContent("");
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title:</label>
          <input
            type="text"
            required
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Content:</label>
          <textarea
            required
            className="input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddingNote;