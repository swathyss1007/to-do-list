import React from "react"

export default function Header(props){

    const [input,setInput] = React.useState("")

    function handleChange(event){
        setInput(event.target.value)
    }

    function handleClick(event){
        event.preventDefault();
        props.setList(prevState=>{
            return([...prevState,input])
        })
        setInput("")
    }

    return(
        <div>
            <form className="main-div">
                <input type="text" name="input" placeholder="Enter Task" value={input} onChange={handleChange}></input>
                <button onClick={handleClick} className="btn-add">Add</button>
            </form>
        </div>
    )
}