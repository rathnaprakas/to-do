import { GlobalProvider } from "../Store/Context";
import AllToDoCard from "./AllToDoCard";

let AllToDos=()=>{
    let data=GlobalProvider()
    let currentTime=data.currentTime()
    let pendingData=data.todos.filter(i=>i.completed===false)
    let pendingData1=pendingData.filter(i=>(i.deadline.year>currentTime.currentYear))
    let pendingData2=pendingData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month>currentTime.currentMonth))
    let pendingData3=pendingData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month===currentTime.currentMonth)&(i.deadline.day>currentTime.currentDay))
    let pendingData4=pendingData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month===currentTime.currentMonth)&(i.deadline.day===currentTime.currentDay)&(i.deadline.hour>currentTime.currentHour))
    let pendingData5=pendingData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month===currentTime.currentMonth)&(i.deadline.day===currentTime.currentDay)&(i.deadline.hour===currentTime.currentHour)&(i.deadline.minutes>currentTime.currentMinutes))
    pendingData=pendingData5.concat(pendingData4)
    pendingData=pendingData.concat(pendingData3)
    pendingData=pendingData.concat(pendingData2)
    pendingData=pendingData.concat(pendingData1)
    return <div>
        {pendingData.map(i=><AllToDoCard key={i.id} {...i}/>)}
    </div>
}

export default AllToDos;