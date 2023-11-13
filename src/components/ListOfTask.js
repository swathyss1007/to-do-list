import React from "react"
import EditTask from "./EditTask"
import DeleteTask from "./DeleteTask"

export default function ListOfTask(props){

    const [deletePop,setDeletePop] = React.useState({
        deleteState : false,
        deleteIndex : -1
    })
    const [editPop, setEditPop] = React.useState({
        editState : false,
        editIndex : -1
    })

    function deleteTask(i){
        setDeletePop({
            deleteState : true,
            deleteIndex : i
        })
        document.querySelector(".main-div").style.opacity = "0.4"
        document.querySelector(".list").style.opacity = "0.4"
    }

    function editTask(i){
        setEditPop({  
            editState : true,
            editIndex : i
        })
        document.querySelector(".main-div").style.opacity = "0.4"
        document.querySelector(".list").style.opacity = "0.4"
    }

    return(
        <div className="list-container">
            <ul className="list">
                    {props.list.map((task,index)=>{
                        return(
                            <div className="list-div" key={index}>
                                <li>{task}</li>
                               <img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/33-512.png" className="delete-icon" onClick={() => deleteTask(index)}></img>
                               <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" className="edit-icon" onClick={() => editTask(index)}></img>
                            </div>      
                        )
                    })}
            </ul>
            {deletePop.deleteState && 
            <DeleteTask 
                setDeletePop = {setDeletePop}
                deleteIndex = {deletePop.deleteIndex}
                list = {props.list}
                setList = {props.setList}
            />}
            
            {editPop.editState && 
            <EditTask
                setEditPop = {setEditPop}
                editIndex = {editPop.editIndex}
                list = {props.list}
                setList = {props.setList}
                input = {props.input}
                setInput = {props.setInput}
            />}
        </div>
    )
}