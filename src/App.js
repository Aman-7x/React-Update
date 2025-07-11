 import Header from "./components/Header";
import Table from "./components/Table";
import Form from "./components/Form";
import { useRef, useState } from "react";
import Data from "./components/Data";
import Buttons from  "./components/Buttons";

 function App(){


   
   const [allTaskList,setAllTaskList] = useState(Data);
   const [allPriority, setAllPriority] = useState(["High", "Normal", "Low"]);
   const [defaultStatus,setDefaultStatus] = useState("Active");
   const [taskStatus,setTaskStatus] = useState("Active");
   const handleControl =(title,pid,date,status)=>{
     let newTask = {title,pid,date,status};
     setAllTaskList([...allTaskList,newTask]);
   }
    return <>
    <Header />
    <Form allPriority={allPriority} setAllPriority={setAllPriority} handleControl={handleControl} />
    <Buttons allTaskList={allTaskList} setAllTaskList={setAllTaskList} defaultStatus={defaultStatus} setDefaultStatus={setDefaultStatus}  setTaskStatus={setTaskStatus}/>
    <Table allTaskList={allTaskList} setAllTaskList={setAllTaskList} defaultStatus={defaultStatus} setDefaultStatus={setDefaultStatus} taskStatus={taskStatus}/>
    </>
 }

 export default App;