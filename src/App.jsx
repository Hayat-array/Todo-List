import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import {FaEdit} from "react-icons/fa";
import login from './components/pages/login';
function App() {
   const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

   useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])

   // Fix: Call saveToLS whenever todos changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos])

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  // const toggleFinished = (e) => {
  //   setshowFinished(!showFinished)
  // }
  
 const handleChange=(e)=>{
  setTodo(e.target.value)
 }
const handleCheckbox = (e) => {
  const id = e.target.name;
  const index = todos.findIndex(item => item.id == id);
  
  if (index !== -1) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos); 
    console.log(newTodos, todos);
  }
};
 
  const handleEdit =(e, id)=>{
    const isConfirmDelete = window.confirm("Are you sure you want to edit this todo?")
    if(isConfirmDelete){
    let t = todos.filter(i=>i.id === id);
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);  
  } 
}
  const handleDelete = (e, id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
    if (!confirmDelete) return;
    else{
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    });
    setTodos(newTodos);
   }    
  }
  const handleAdd =()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
  }

  return (
    <>
    <Navbar/>
    {/* <Login/> */}
    
     <div className="container p-5 mx-auto my-5 min-h-[80vh] w-[95vw] rounded-xl bg-violet-50">
      <div className="addTodo">
        <h2 className="text-lg font-bold">Add a Todo</h2>
        <input  onChange={handleChange} value={todo} type="text" className='w-1/2 px-5 py-1 rounded-full' />
         <button onClick={handleAdd} className="p-3 py-1 m-4 text-sm font-bold text-white rounded-md bg-violet-800 hover:bg-violet-950">Save</button>
      </div>
      <input type="checkbox" id="show" className='my-4' onChange={toggleFinished} checked={showFinished} />
      <label className='mx-2' htmlFor="show">Show Finished</label>
      <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
      <h2 className='text-lg font-bold'>Your Todos</h2>
      <div className="todos">
        {todos.length === 0 && <div className='m-5'>No Todos To Display</div>}
        {todos.map(item=>{
          
       return(showFinished || !item.isCompleted) && <div key={item.id} className={"todo flex justify-between my-3 overflow-fit"}>
       <div key={item.id} className="flex todo w-1/3 justify-between">
        <div className='flex gap-5'>
        <input name={item.id} onClick={handleCheckbox}type="checkbox" value={item.isCompleted}  id='' />
        <div className='mt-4'>
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
        </div>
        </div>
        <div className="buttons flex item w-1/4 justify-between">
          <button onClick={(e)=>handleEdit(e,item.id)} className="p-3 py-1 m-4 text-sm font-bold text-white rounded-md bg-violet-800 hover:bg-violet-950"><FaEdit/></button>
          <button onClick={(e)=>{handleDelete(e,item.id)}} className="p-3 py-1 m-4 text-sm font-bold text-white rounded-md bg-violet-800 hover:bg-violet-950"><AiFillDelete/></button>
        </div>
       </div>
       </div> 
       })}
      </div>
     </div>
    </>
  )
}

export default App
