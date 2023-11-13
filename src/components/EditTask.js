import React from "react"

export default function EditTask(props){

    const [updateTask, setUpdateTask] = React.useState("")
    
    function handleClose(){
        props.setEditPop({
            deleteState : false,
            deleteIndex : -1
        })
        document.querySelector(".main-div").style.opacity = "1"
        document.querySelector(".list").style.opacity = "1"
    } 

    function handleChange(event){
        setUpdateTask(event.target.value)
    }

    function handleClick(event){
        event.preventDefault();
        props.setList(prevState=>{
            const listArr = [...prevState]
            listArr.splice(props.editIndex,1,updateTask)
            return listArr
        })
        setUpdateTask("")
        handleClose()
    }

    return(
        <div className="modal-BG">
            <div>
            <span className="close-symbol" onClick={handleClose}>X</span>
            <div>Edit "{props.list[props.editIndex]}" task</div>
            <br></br>
            <form className="main-div">
                <input type="text" name="update" placeholder="Edit Task" value={updateTask} onChange={handleChange}></input>
                <button onClick={handleClick} className="btn-add">Update</button>
            </form>
            </div>
        </div>
    )
}