import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { Visibility } from "@material-ui/icons";

function Form(props){

    const[clicked,setClick] = useState(false)

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const{name,value}= event.target;
        setNote(prevItems => {
            return {...prevItems, [name]: value};
        });
    }

    function setting(){
        setClick(true);
    }

    return(
        <div >
            <form className="create-note" onSubmit={(event)=>{
                props.addNote(note)

                setNote({
                    title:"",
                    content:""
                })
                setClick(false);
                event.preventDefault();
            }}>
                
                {clicked && (<input onChange={handleChange} type="text" name="title" id="" placeholder="Title" value={note.title} />)}
                <textarea onChange={handleChange} onClick={setting} name="content" id="" cols="10" rows={ clicked ? "3" : "1"} placeholder="Take a note..." value={note.content} ></textarea>
                <Zoom in={clicked}>
                    <Fab type="submit" style={ clicked ? { display:'block'} : {display : 'block'}} ><AddIcon /></Fab>
                </Zoom>
                
            </form>
        </div>
    );
}

export default Form;