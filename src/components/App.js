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
        priority: true,
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
    ],
    doneTodos : []
  })


  const [todoObject, setTodoObject] = useState({
    numOfAddition: 0,
    ifAdditionReady: false,
    title: "",
    priority: false,
    additionList : [{}]
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

  const handleDelete = (elementToDelete) => {
    let newTodos = todo.todos.filter( (element) => {
          if(element !== elementToDelete) return element;
    });

    setTodo({
      todos: newTodos
    })
  }
  const handleAddtoDone = (doneElement) => {
    console.log(doneElement)
    setTodo({
      ...todo,
        doneTodos:[...todo.doneTodos, doneElement]
    })
    console.log(todo.doneTodos)
  }

  let notDoneTodos = todo.todos.map( (element,index) => (
    <ToDoComponent key={index} todoElement={element} delete={handleDelete} addToDone={handleAddtoDone}/>
  ));

  let doneTodos = todo.doneTodos.map( (element, index) => (
      <ToDoComponent key={index} doneElement={element} />
  ));
  //console.log(todo.todos);
  return (
    <div className="App">
      <div className="flexbox">
        <div>
          <ToDoForm submit={handleSubmitForm} 
              change={handleChangeForm} 
              numAddition={todo.numOfAddition} 
              handleIncrementAddition={handleAddAddition}/>
        </div>
        <div className="flexbox-col">
          <div className="todos-components-container">
              {notDoneTodos}
          </div>
          <h1>Done tasks</h1>
          <div className="todos-done-container">
              {doneTodos}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
