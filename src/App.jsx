import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {
  

  return (
    <>
     <div>
      <h1 className="text-center text-2xl text-yellow-200
      font-bold
      ">Todo List</h1>
     <AddTodo />
     <Todos />
     </div>
    </>
  )
}

export default App
