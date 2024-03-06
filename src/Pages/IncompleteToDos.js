import { GlobalProvider } from "../Store/Context";
import MissedToDoCard from "./MissedToDoCard";

let MissedToDos=()=>{
    let data=GlobalProvider()
    let currentTime=data.currentTime()
    let missedData=data.todos.filter(i=>i.completed===false)
    let missedData1=missedData.filter(i=>(i.deadline.year<currentTime.currentYear))
    let missedData2=missedData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month<currentTime.currentMonth))
    let missedData3=missedData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month===currentTime.currentMonth)&(i.deadline.day<currentTime.currentDay))
    let missedData4=missedData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month===currentTime.currentMonth)&(i.deadline.day===currentTime.currentDay)&(i.deadline.hour<currentTime.currentHour))
    let missedData5=missedData.filter(i=>(i.deadline.year===currentTime.currentYear)&(i.deadline.month===currentTime.currentMonth)&(i.deadline.day===currentTime.currentDay)&(i.deadline.hour===currentTime.currentHour)&(i.deadline.minutes<=currentTime.currentMinutes))
    missedData=missedData5.concat(missedData4)
    missedData=missedData.concat(missedData3)
    missedData=missedData.concat(missedData2)
    missedData=missedData.concat(missedData1)
    return <div>
        {missedData.map(i=><MissedToDoCard {...i} key={i.id}/>)}
    </div>
}

export default MissedToDos;