import { useRef } from "react";
import { GlobalProvider } from "../Store/Context";
import { useNavigate } from "react-router-dom";

let AddNewToDo=()=>{

    let data=GlobalProvider()

    let inputTitleRef=useRef()
    let inputDeadlineRef=useRef()
    let inputIsImportantRef=useRef()
    let inputDescriptionRef=useRef()

    let history=useNavigate()

    let submitHandler=(e)=>{
        e.preventDefault()

        let enteredTitle=inputTitleRef.current.value
        let enteredDeadline=inputDeadlineRef.current.value
        let enteredIsImportant=inputIsImportantRef.current.value
        let enteredDescription=inputDescriptionRef.current.value
        let newIndex=(data.todos.length?data.todos[data.todos.length-1].id+1:0)

        console.log(enteredDeadline)
        let todo={id:newIndex,title:enteredTitle,
            deadline:{day:Number(enteredDeadline.slice(8,10)),month:Number(enteredDeadline.slice(5,7)),year:Number(enteredDeadline.slice(0,4)),hour:Number(enteredDeadline.slice(11,13)),minutes:Number(enteredDeadline.slice(14,16))},
            isImportant:enteredIsImportant,description:enteredDescription,completed:false}
            
            data.addNewToDo(todo)
            history("/")
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <div className="control">
            <label htmlFor="title">Title</label>
            <input type="text" required id="title" ref={inputTitleRef}/>
            </div>
            <div className="control">
                <label htmlFor="deadline">Deadline</label>
                <input type="datetime-local" id="deadline" ref={inputDeadlineRef}/>
            </div>
            <div className="control">
            <label htmlFor="isImportant">Important ?</label>
            <select id="isImportant" ref={inputIsImportantRef}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            </div>
            <div className="control">
            <label htmlFor="description">Description</label>
            <textarea type="text" id="description" rows={5} ref={inputDescriptionRef}/>
            </div>
            <button>Add</button>
        </form>
    </div>
}

export default AddNewToDo;