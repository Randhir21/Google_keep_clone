import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CreateNote from './Component/CreateNote';
import Note from './Component/Note';
import { useState } from 'react';

function App() {
  const [addItem, setAddItem]=useState([]);
  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return[...prevData,note];
    })
  }
  const onDelete=(id)=>{
    setAddItem((oldData)=>
      oldData.filter((curentData, index)=>{
          return index !==id;
      })
    );
  };
  return (
    <div className="App">
      <div className='body'>
      <Header />
      <CreateNote passNote={addNote} />
      {
        addItem.map((val, index)=>{
          return <Note 
            key={index}
            id={index}
            title={val.title}
            containt={val.containt}
            deleteItem={onDelete}
          />

        })
      }
      </div>
      
      <Footer />
     
    </div>
  );
}

export default App;
