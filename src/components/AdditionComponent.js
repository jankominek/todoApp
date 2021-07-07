import '../styles/AdditionComponent.css'
const AdditionComponent = (props) => {
    return(
        <div className="AdditionComponent-container">
            <span>{props.name}</span>
            <input type="checkbox" className="AdditionComponent-checkBox"></input>
        </div>
    )
}

export default AdditionComponent;