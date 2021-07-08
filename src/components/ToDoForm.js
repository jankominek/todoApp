import '../styles/ToDoForm.css'
import AdditionToDo from './AdditionToDo';
const ToDoForm = (props) => {
    console.log(props.numAddition)
    


    return(
        <div className="ToDoForm-container">
                <form className="ToDoForm-flexbox-col" onSubmit={props.submit}>
                    <div className="ToDoForm-general">
                        <div className="ToDoForm-flexbox-row">
                            
                            <input 
                                className="ToDoForm-inputText" 
                                placeholder="type your to-do"
                                type="text" 
                                name="title" 
                                onChange={props.change}
                                ></input>
                            <input 
                                className="ToDoForm-inputCheckBox" 
                                type="checkbox" 
                                name="priority"
                                onChange={props.change}
                                ></input>
                        </div>
                    
                        <input className="ToDoForm-inputText" type="date"></input>
                    </div>

                    
                    <button className="ToDoForm-button" type="submit">Submit</button>
                </form>
                <div className="AdditionToDo-list">
                        <button onClick={props.handleIncrementAddition}>Add</button>
                    </div>
            </div>
    )
}

export default ToDoForm;