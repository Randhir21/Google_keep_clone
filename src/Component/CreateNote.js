import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./style.css";
export default function CreateNote(props) {

  const [note, setNote] = useState({
    title: "",
    containt: "",
  });
  const [expand, setExpand]=useState(false);
  const inputEvent=(event)=>{
      const {name, value}=event.target;
      setNote((prevData)=>{
          return{
            ...prevData,
            [name]: value
          };
      });

  };

  const addEvent=()=>{
        props.passNote(note);
        setNote({
            title: "",
            containt: "",
          });
  }
  const expandIt=()=>{
    setExpand(true);
  }

  const backToNormal=()=>{
    setExpand(false);
  }

  return (
    <div className='main_div'>
      <div className="Note_div" onDoubleClick={backToNormal}>
        <form>
            {expand?
          <input
            type="text"
            name='title'
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
            className="txtarea"
            autoComplete="off"
          />:null
          }
          <br />
          <textarea
            rows=""
            column=""
            name='containt'
            value={note.containt}
            onChange={inputEvent}
            onClick={expandIt}
            
            placeholder="Write a notes"
            className="txtarea"
          ></textarea>
          <br />
          {expand?
              <Button variant="contained" onClick={addEvent}>
            <AddIcon />
          </Button>
          :null}
        </form>
      </div>
    </div>
  );
}
