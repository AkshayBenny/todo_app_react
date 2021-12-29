import React, { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [location, setLocation] = useState('manchester');
  const [myNote, setMyNote] = useState([]);

  const resetForm = () => {
    setTitle('');
    setNote('');
    setLocation('manchester');
  };

  const handleDelete = (id) => {
    setMyNote(
      myNote.filter((note) => {
        return id !== note.id;
      })
    );
  };

  const handleAddNote = (e) => {
    e.preventDefault();

    let newNote = {
      id: Math.floor(Math.random() * 100000),
      title: title,
      note: note,
      location: location,
    };

    setMyNote((prevNotes) => {
      return [...prevNotes, newNote];
    });

    resetForm();
    console.log(visible);
  };

  return (
    <div>
      <button onClick={() => setVisible(true)}>Add new note</button>
      {myNote.map((note) => {
        return (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.note}</p>
            <p>{note.location}</p>

            <button onClick={() => handleDelete(note.id)}>Delete note</button>
          </div>
        );
      })}

      <div>
        <h1>Add your note here</h1>

        <form onSubmit={handleAddNote}>
          <input
            type='text'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type='text'
            placeholder='Add your note'
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value='manchester'>Manchester</option>
            <option value='london'>London</option>
            <option value='birmingham'>Birmingham</option>
          </select>
          <button onClick={() => setVisible(false)}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
