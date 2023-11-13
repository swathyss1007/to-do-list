import React from "react"

export default function DeleteTask(props){

    function handleClose(){
        props.setDeletePop({
            deleteState : false,
            deleteIndex : -1
        })
        document.querySelector(".main-div").style.opacity = "1"
        document.querySelector(".list").style.opacity = "1"
    }

    function handleDelete(){  
        props.setList(prevState => {
        const itemsList = [...prevState]
        itemsList.splice(props.deleteIndex,1)
        return itemsList
        })
        handleClose()
    }

    return(
        <div className="modal-BG">
            <span className="close-symbol" onClick={handleClose}>X</span>
            <p>Are you sure want to delete this "{props.list[props.deleteIndex]}" task ?</p>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
            <button className="cancel-btn" onClick={handleClose}>Cancel</button>
        </div>
    )
}