// import { Header } from './components/Header'
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: "Demo",
    description: "this is demo"
  }]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos").then(async(res)=>{
      const json = await res.json();
      setTodos(json.todos)
    });
    }, 2000);
  },[])

  return <>
  <h1 style={{margin:"20px"}}>Todos</h1>
  {todos.map(todo => <CardWrapper key={todo.id}><TodoComponent  title={todo.title} description={todo.description}/></CardWrapper>)}
 
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


export default App
