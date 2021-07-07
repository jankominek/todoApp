import '../styles/AdditionToDo.css'
const AdditionToDo = (props) => {
    return(
        <div className="AdditionToDo-container">
            <div className="AdditionToDo-flexbox-row">
                <input type="text" placeholder="type here.." className="AdditionToDo-inputText" name={"addition-"}></input>
                <input type="checkbox" className="AdditionToDo-checkBox"></input>
            </div>
        </div>
    )
}

export default AdditionToDo;