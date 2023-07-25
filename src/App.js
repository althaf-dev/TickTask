import "./App.css";
import { useState } from "react";
import DeletedTask from "./Components/DeletedTasks/DeletedTask";
import FinishedTasks from "./Components/FinishedTasks/FinishedTasks";
import ActiveTasks from "./Components/ActiveTasks/ActiveTasks";
import { Appcontext } from "./Appcontext";
import Header from "./Components/Header/Header";




function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();
  const [tag, setTag] = useState("");
  const [tags ,setTags] = useState([]);
  const [showTagList,setShowTagList] = useState(false);

  return (
    <div className="App">

      <div className="container-fluid">
        
        <Appcontext.Provider value={{todos: [...todos],setTodos: setTodos,todo: todo,setTodo: setTodo,tags:tags,setTags:setTags,tag:tag,setTag:setTag,showTagList,setShowTagList}}>
          <Header/>
          <div className="row">
            <FinishedTasks/>
            <ActiveTasks />
            <DeletedTask />
          </div>
        </Appcontext.Provider>

      </div>
    </div>
  );
}

export default App;
