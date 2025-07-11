import { useRef } from "react";

function Form({allPriority,setAllPriority,handleControl}){
  let titleRef = useRef(null);
  let pidRef = useRef(null);

  const handleSubmitForm = (event)=>{
           event.preventDefault();
           
           let title = titleRef.current.value;
           let prio = pidRef.current.value;
           let pid = prio=="High"?1:prio=="Normal"?2:"Low";
           let today = new Date();
           let date = today.getDate().toString()+"/"+(today.getMonth().toString())+"/"+(today.getFullYear().toString());
           let status = "Active";
           handleControl(title, pid, date, status );
  }
    return<>


    <div className="container mt-3 mb-3">
            <form onSubmit={handleSubmitForm}>
        <div className="row">
            <div className="col-md-6">
                <input ref={titleRef} type="text" name="title" placeholder="Title..." className="form-control"/>
            </div>
            <div className="col-md-6">
                <select ref={pidRef} name="select" id="select" className="form-control">
                    <option value="Select">Select</option>
                   {allPriority.map((task)=>(
                    <option value={task}>{task}</option>))} 
                </select>
            </div>
            <div style={{display:"flex", justifyContent:"center", fontSize:"20px"}}>
                <button className="btn btn-primary mt-3 mb-3" type="submit" style={{width:"100px"}}>Add Task</button>
                </div>
        </div>
        </form>
    </div>
    </>
}

export default Form;