// import { Header } from './components/Header'
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState(1);

  return <>
  <h1 style={{margin:"20px"}}>Todos</h1>
  <button style={{margin:"20px"}} onClick={()=>{setId(1)}}>1</button>
  <button style={{margin:"20px"}} onClick={()=>{setId(2)}}>2</button>
  <button style={{margin:"20px"}} onClick={()=>{setId(3)}}>3</button>
  <button style={{margin:"20px"}} onClick={()=>{setId(4)}}>4</button>
  <TodoWithId id={id}/>
  </> 
  
  
}

function CardWrapper({children}){

  return <div style={{border:"2px solid black",padding : 20, margin:20, boxShadow:"5px 5px 20px grey"}}>
    {children}
  </div>
}

function TodoComponent({title, description}){
  return <div>
    <h2>{title}</h2>
    <h3>{description}</h3>
  </div>
}

function TodoWithId({id}){
  const [todo, setTodo] = useState({});

  async function getTodo(id){
    const res = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);
    const json = await res.json();
    setTodo(json.todo)
  }
  useEffect(()=>{
    getTodo(id);
  },[id])

  return (
    <CardWrapper><TodoComponent title={todo.title} description={todo.description}/></CardWrapper>
  )
}

export default App
