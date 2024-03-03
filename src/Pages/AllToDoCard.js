import Card from "../Components/Card";
import { GlobalProvider } from "../Store/Context";

let AllToDoCard=({id,title,deadline,isImportant,description})=>{

    let data=GlobalProvider()

    let completeButtonHandler=()=>{
        data.completeTask(id)
    }
    let importantButtonHandler=()=>{
        (isImportant==="false")?data.makeTaskImportant(id):data.makeTaskNotImportant(id)
    }
    let deleteButtonHandler=()=>{
        data.deleteTask(id)
    }

    return <div>
        <Card title={title} deadline={deadline} isImportant={isImportant} description={description}/>
        <button onClick={importantButtonHandler}>{(isImportant==="false")?"Make Important":"Make Not Important"}</button>
        <button onClick={completeButtonHandler}>Task Completed</button>
        <div>
        <button onClick={deleteButtonHandler}>Delete Task</button>
        </div>
    </div>
}

export default AllToDoCard;