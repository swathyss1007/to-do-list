import React from "react"

export default function ListOfTask(props){

    function deleteTask(i){
        props.setList(prevState => {
            const itemsList = [...prevState]
            itemsList.splice(i,1)
            return itemsList
        })
    }

    function editTask(){
        
    }

    return(
        <div className="list-container">
            <ul>
                    {props.list.map((task,index)=>{
                        return(
                            <div className="list-div" key={index}>
                                <li>{task}</li>
                                <img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/33-512.png" className="delete-icon" onClick={() => deleteTask(index)}></img>
                                <img src="https://logowik.com/content/uploads/images/888_edit.jpg" className="edit-icon" onClick={editTask}></img>
                            </div>
                            
                        )
                    })}
            </ul>
        </div>
    )
}