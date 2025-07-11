import { useState } from "react";
 

function Table({allTaskList,setAllTaskList, defaultStatus,setDefaultStatus, setTaskStatus}){
    const changeStatus = (task)=>{
        const status = task.status=="Active"?"Deactive":"Active";
        task.status=status;
        setAllTaskList([...allTaskList]);
    }
    return<>
     <table className="table ms-5 mt-3 mb-3">
        <thead>
            <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Date</th>
                <th>Priority</th>
                <th>Operation</th>
            </tr>
        </thead>
        <tbody>
            {allTaskList.filter((task)=>{return task.status == defaultStatus}).sort((a,b)=>a.pid-b.pid).map((task,index)=>{return <tr 
            className={
                task.pid==1?"table-danger":task.pid==2?"table-warning":"table-success"
            }>
                <td>{index+1}</td>
                <td>{task.title}</td>
                <td>{task.date}</td>
                <td>{task.pid==1?"High":task.pid==2?"Normal":"Low"}</td>
                <td>
                    <button onClick={()=>{return changeStatus(task)}} className="btn btn-outline-danger w-25">{task.status=="Active"?"Deactive":"Active"}</button>
                </td>
            </tr>})}
        </tbody>
     </table>
    </>
}

export default Table;