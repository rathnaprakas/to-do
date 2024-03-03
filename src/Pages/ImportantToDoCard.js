import { GlobalProvider } from "../Store/Context";

let ImportantToDoCard=({id,title,deadline,isImportant,description})=>{

    let data=GlobalProvider()

    let notImportantHandler=()=>{
        data.makeTaskNotImportant(id)
    }

    let completeButtonHandler=()=>{
        data.completeTask(id)
    }

    let deleteButtonHandler=()=>{
        data.deleteTask(id)
    }

    return <div>
        <h4>{title}</h4>
        <p>{`${deadline.hour} hrs on ${deadline.day}-${deadline.month}-${deadline.year}`}</p>
        <p>{description}</p>
        <button onClick={notImportantHandler}>Not Important</button>
        <button onClick={completeButtonHandler}>Task Completed</button>
        <div>
        <button onClick={deleteButtonHandler}>Delete Task</button>
        </div>
    </div>
}

export default ImportantToDoCard;