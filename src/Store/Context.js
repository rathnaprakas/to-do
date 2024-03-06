import { createContext, useContext, useState } from "react";

let AppContext=createContext([])

let AppProvider=({children})=>{

    let data=JSON.parse(localStorage.getItem("data"))

    let array={todos:data}

    let [state,setState]=useState(true)

    let addNewToDo=(newtodo)=>{
        data=[...array.todos]
        data.push(newtodo)
        data=JSON.stringify(data)
        localStorage.setItem("data",data)
        setState(!state)
    }

    let completeTask=(id)=>{
        data=[...array.todos]
        let wantedTask=data.filter(i=>i.id===id)
        let wantedTaskIndex=data.indexOf(wantedTask[0])
        data[wantedTaskIndex].completed=true
        data=JSON.stringify(data)
        localStorage.setItem("data",data)
        setState(!state)
    }

    let deleteTask=(id)=>{
        data=[...array.todos]
        let wantedTask=data.filter(i=>i.id===id)
        let wantedTaskIndex=data.indexOf(wantedTask[0])
        data.splice(wantedTaskIndex,1)
        data=JSON.stringify(data)
        localStorage.setItem("data",data)
        setState(!state)
    }

    let makeTaskNotImportant=(id)=>{
        data=[...array.todos]
        let wantedTask=data.filter(i=>i.id===id)
        let wantedTaskIndex=data.indexOf(wantedTask[0])
        data[wantedTaskIndex].isImportant="false"
        data=JSON.stringify(data)
        localStorage.setItem("data",data)
        setState(!state)
    }

    let makeTaskImportant=(id)=>{
        data=[...array.todos]
        let wantedTask=data.filter(i=>i.id===id)
        let wantedTaskIndex=data.indexOf(wantedTask[0])
        data[wantedTaskIndex].isImportant="true"
        data=JSON.stringify(data)
        localStorage.setItem("data",data)
        setState(!state)
    }

    let setNewDeadline=(id,newDeadline)=>{
        data=[...array.todos]
        let wantedTask=data.filter(i=>i.id===id)
        let wantedTaskIndex=data.indexOf(wantedTask[0])
        data[wantedTaskIndex].deadline=newDeadline
        data=JSON.stringify(data)
        localStorage.setItem("data",data)
        setState(!state)
    }

    let currentTime=()=>{
        let time=new Date()
        let hour=time.getHours()
        let day=time.getDate()
        let month=time.getMonth()+1
        let year=time.getFullYear()
        let minutes=time.getMinutes()

        return {currentHour:hour,currentMinutes:minutes,currentDay:day,currentMonth:month,currentYear:year}
    }

    return <AppContext.Provider value={{...array,addNewToDo,completeTask,deleteTask,makeTaskNotImportant,makeTaskImportant,currentTime,setNewDeadline}}>
        {children}
    </AppContext.Provider>
}

let GlobalProvider=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,GlobalProvider}