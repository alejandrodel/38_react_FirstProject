import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note";
//import notes from "../notes";
import Form from "./Form";

function App (){

  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteItem(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }

  return(
    <div>
      <Header />  
      <Form 
      addNote={addNotes}/>
      {notes.map((noteItem,index) => (
        <Note
          key={noteItem.key}
          id={index}
          header={noteItem.title}
          details={noteItem.content}
          delete={deleteItem}
        />
        ))}
      <Footer />
    </div>
  );
};

export default App;