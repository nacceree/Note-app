import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import './notes.css'

const AddingNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newNote = {
      userId: user?.id ?? "",
      title: title,
      content: content,
    };
  
    try {
      const response = await fetch('http://localhost:5173/api/note/addnote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });
  
      if (response.ok) {
        // Handle successful note creation
        setTitle("");
        setContent("");
      } else {
        // Handle error
        console.error('Failed to create note');
      }
    } catch (error) {
      console.error('Error:', error);
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