import { useRef, useState } from "react";
import Card from "../Components/Card";
import { GlobalProvider } from "../Store/Context";

let MissedToDoCard=({id,title,deadline,isImportant,description})=>{
    let [show,setShow]=useState(false)
    let inputDeadlineRef=useRef()
    let data=GlobalProvider()
    let completeButtonHandler=()=>{
        data.completeTask(id)
    }
    let setNewDeadlineHandler=()=>{
        setShow(!show)
    }
    let submitNewDeadlineHandler=(e)=>{
        e.preventDefault()
        let enteredDeadline=inputDeadlineRef.current.value
        let newDeadline={day:Number(enteredDeadline.slice(8,10)),month:Number(enteredDeadline.slice(5,7)),year:Number(enteredDeadline.slice(0,4)),hour:Number(enteredDeadline.slice(11,13)),minutes:Number(enteredDeadline.slice(14,16))}
        data.setNewDeadline(id,newDeadline)
    }
    return <div>
        <Card title={title} deadline={deadline} isImportant={isImportant} description={description}/>
        <button onClick={completeButtonHandler}>Task Completed</button>
        <button onClick={setNewDeadlineHandler}>{show?"No New Deadline":"New Deadline"}</button>
        {show?
        <div>
            <form onSubmit={submitNewDeadlineHandler}>
                <input type="datetime-local" id="deadline" ref={inputDeadlineRef}/>
                <button>Set New Deadline</button>
            </form>
        </div>:null}
    </div>
}

export default MissedToDoCard;