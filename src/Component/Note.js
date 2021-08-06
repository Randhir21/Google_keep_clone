import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
export default function Note(props) {
  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return (
    <div className="Note_body">
      <div className="Note_div1">
        <h1>{props.title}</h1>
        <p>{props.containt}</p>
        <button onClick={deleteNote} className="note_btn">
          <DeleteOutlineIcon />
        </button>
      </div>

      

      

      
      
      
      

    </div>
  );
}
