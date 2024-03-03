import { GlobalProvider } from "../Store/Context";
import ImportantToDoCard from "./ImportantToDoCard";

let ImportantToDos=()=>{
    let data=GlobalProvider()
    let currentTime=data.currentTime()
    let pendingData=data.todos.filter(i=>i.completed===false)
    let pendingData1=pendingData.filter(i=>(i.deadline.year>currentTime.currentYear))
    let pendingData2=pendingData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month>currentTime.currentMonth))
    let pendingData3=pendingData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month===currentTime.currentMonth)&(i.deadline.day>currentTime.currentDay))
    let pendingData4=pendingData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month===currentTime.currentMonth)&(i.deadline.day===currentTime.currentDay)&(i.deadline.hour>currentTime.currentHour))
    pendingData=pendingData4.concat(pendingData3)
    pendingData=pendingData.concat(pendingData2)
    pendingData=pendingData.concat(pendingData1)
    let importantData=pendingData.filter(i=>i.isImportant==="true")
    return <div>
        {importantData.map(i=><ImportantToDoCard key={i.id} {...i}/>)}
    </div>
}

export default ImportantToDos;