import React from "react"
import Header from "./components/Header"
import ListOfTask from "./components/ListOfTask"
import Style from "./style.css"

export default function App(){

    const [list,setList] = React.useState([])
    
    return(
        <div className="app-div">
            <h2 className="title">TO-DO-LIST</h2>
            <Header 
                list={list}
                setList={setList}
            />
            <ListOfTask 
                list={list}
                setList={setList}
            />
        </div>
    )
}