import Card from "../Components/Card";
import { GlobalProvider } from "../Store/Context";

let CompletedToDos=()=>{
    let data=GlobalProvider()
    let completedData=data.todos.filter(i=>i.completed===true)
    return <div>
        {completedData.map(i=><Card key={i.id} {...i}/>)}
    </div>
}

export default CompletedToDos;