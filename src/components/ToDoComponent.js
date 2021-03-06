import { useState } from 'react';
import '../styles/ToDoComponent.css'
import AdditionComponent from './AdditionComponent';

const ToDoComponent = (props) => {

    const [ state, setState] = useState({
        isActive: false
    })


    const handleOnClickActive = () => {
        setState({
            isActive: !state.isActive
        })
    }

    let list = props.todoElement.additionList.map( (addition,index) => (
        <AdditionComponent name={addition.name} key={index}/>
    ))
    console.log(props.todoElement.priority)
    return(
        <div className="ToDoComponent-container">
            <div className="ToDoComponent-flexbox-col">
                <div className="button-field">
                    <button className="closeBtn" onClick={() => props.delete(props.todoElement)}>X</button>
                </div>
                <h1>{props.todoElement.title}</h1>

                <button className="listBtn" onClick={handleOnClickActive}>show more</button>
                {state.isActive ? list.length ? list : null : null}

                <button className="doneBtn" onClick={() => props.addToDone(props.todoElement)}>Done</button>
            </div>
            <div className="ToDoComponent-flexbox-row">

            </div>
            
        </div>
    )
}

export default ToDoComponent;