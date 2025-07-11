
function Buttons({allTaskList,setAllTaskList,defaultStatus, setDefaultStatus}){

    return <>
    <div style={{margin:"10px 5px 10px 30px"}}>
        <button onClick={()=>setDefaultStatus("Active")} disabled={defaultStatus=="Active"?true:false} className="ms-2 btn btn-danger">Active : {allTaskList.filter((task)=>task.status=="Active").length}</button>
        <button onClick={()=>setDefaultStatus("Deactive")} disabled={defaultStatus=="Deactive"?true:false} className="btn btn-success ms-2"  >Deactive :  {allTaskList.filter((task)=>task.status=="Deactive").length}</button>
    </div>
    </>
}

export default Buttons;