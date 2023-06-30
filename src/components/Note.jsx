import React from "react";
import DeleteIcon from '@material-ui/icons/Delete'

function Note(props){
    return(
        <div className="note">
            <h1>{props.header}</h1>
            <p>{props.details}</p>
            <button type="submit"onClick={()=>{
                props.delete(props.id);
            }}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;

