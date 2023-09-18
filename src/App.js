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
        <Route  path="tickTask/*" element = {<Home/>} /> 
        <Route  path="tickTask/todo" element={<TodoApp/>} />
        <Route  path ="tickTask/login" element={<Login/>} />
        <Route  path ="tickTask/signup" element={<Signup/>} />
        <Route  path ="tickTask/usercreated" element={<UserCreated/>} />
      </Routes> 
      </DataProvider>
      </Router>
      
    </div>
  );
}

export default App;
