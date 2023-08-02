import "./App.css";
import { useEffect, useState } from "react";
import DeletedTask from "./Components/DeletedTasks/DeletedTask";
import FinishedTasks from "./Components/FinishedTasks/FinishedTasks";
import ActiveTasks from "./Components/ActiveTasks/ActiveTasks";
import { Appcontext } from "./Appcontext";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
function App() {

  const API_URL = "http://localhost:3500/items";
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [showTagList, setShowTagList] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [editMode,SetEditMode] = useState(false);
  const [Filter, setFilter] = useState([{
    priority: ['1', '2', '3', '0'],
    tags: 'all', due: 'all'
  }]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error('Did not recieve data from server');
        }
        const list = await response.json();
        setTodos(list);
        console.log(list);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message)
      } finally {
        setIsloading(false);
      }
    }
    setTimeout(() => {
      fetchItems();
    }, 2000)

  }, [])

  return (
    <div className="App">

      <div className="container-fluid">


        <Appcontext.Provider value={{

          todos: [...todos],
          setTodos: setTodos,
          todo: todo,
          setTodo: setTodo,
          tags: tags,
          setTags: setTags,
          tag: tag,
          setTag: setTag,
          showTagList,
          setShowTagList,
          Filter,
          setFilter,
          editMode,
          SetEditMode

        }}>
          <Header error={fetchError} loading={isloading} />

          <div className="row">
            <SideBar />
            <ActiveTasks />
            <FinishedTasks />
            <DeletedTask />
          </div>

        </Appcontext.Provider>
        <div className="row mt-5">
          <div className="bg-header text-dark p-2 mt-5">Footer</div>
        </div>


      </div>
    </div>
  );
}

export default App;
