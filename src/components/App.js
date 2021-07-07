import '../styles/App.css';
import {useState} from 'react'
import ToDoForm from './ToDoForm';
import ToDoComponent from './ToDoComponent';
function App() {

  const [todo, setTodo] = useState({
    todos: [
      {
        numOfAddition: 0,
        ifAdditionReady: false,
        title: "a",
        priority: false,
        additionList : [
          {
          name: "a1"
        },
        {
          name: "a2"
        },
        {
          name: "a3"
        },
      ]
      },
      {
        numOfAddition: 0,
        ifAdditionReady: false,
        title: "b",
        priority: false,
        additionList : []
      },
      {
        numOfAddition: 0,
        ifAdditionReady: false,
        title: "c",
        priority: false,
        additionList : []
      },
      {
        numOfAddition: 0,
        ifAdditionReady: false,
        title: "d",
        priority: false,
        additionList : []
      },
    ]
  })

  const [todoObject, setTodoObject] = useState({
    numOfAddition: 0,
    ifAdditionReady: false,
    title: "",
    priority: false,
    additionList : []
  })

 const  handleSubmitForm = (e) => {
    e.preventDefault();
    setTodo({
      todos: [...todo.todos, todoObject]
    })
    setTodoObject({});
  }

  const handleChangeForm = (e) => {
    setTodoObject( prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const handleAddAddition = () => {
    console.log("add")
  }

  let list = todo.todos.map( element => (
    <ToDoComponent todoElement={element}/>
  ))
  console.log(todo.todos);
  return (
    <div className="App">
      <div className="flexbox">
        <div>
          <ToDoForm submit={handleSubmitForm} 
              change={handleChangeForm} 
              numAddition={todo.numOfAddition} 
              handleIncrementAddition={handleAddAddition}/>
        </div>
        <div className="todos-components-container">
            {list}
        </div>
        
      </div>
    </div>
  );
}

export default App;
