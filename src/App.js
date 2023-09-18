import "./App.css";
import { DataProvider } from "./Appcontext";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import UserCreated from "./Components/Login/UserCreated";
import TodoApp from "./TodoApp";
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <DataProvider>
        <Routes>
        <Route  path="TickTask/*" element = {<Home/>} /> 
        <Route  path="todo" element={<TodoApp/>} />
        <Route  path ="login" element={<Login/>} />
        <Route  path ="signup" element={<Signup/>} />
        <Route  path ="usercreated" element={<UserCreated/>} />
      </Routes> 
      </DataProvider>
      </Router>
      
    </div>
  );
}

export default App;
