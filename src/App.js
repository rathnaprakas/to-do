import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllToDos from "./Pages/AllToDos";
import AddNewToDo from "./Pages/AddNewToDo";
import CompletedToDos from "./Pages/CompletedToDos";
import ImportantToDos from "./Pages/ImportantToDos";
import MissedToDos from "./Pages/IncompleteToDos";
import dummyData from "./Pages/dummyData";
import { GlobalProvider } from "./Store/Context";

if (localStorage.length===0) {
  let dummyData1=JSON.stringify(dummyData)
  localStorage.setItem("data",dummyData1)
}

let App=()=> {

  let data=GlobalProvider()
  setInterval(data.refresh,1000)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" Component={AllToDos}/>
        <Route path="addnew" Component={AddNewToDo}/>
        <Route path="completedtodos" Component={CompletedToDos}/>
        <Route path="missedtodos" Component={MissedToDos}/>
        <Route path="importanttodos" Component={ImportantToDos}/>
      </Routes>
    </div>
  );
}

export default App;