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
        <Route exact path="/" element = {<Home/>} /> 
        <Route exact path="/todo" element={<TodoApp/>} />
        <Route exact path ="/login" element={<Login/>} />
        <Route exact path ="/signup" element={<Signup/>} />
        <Route exact path ="/usercreated" element={<UserCreated/>} />
      </Routes> 
      </DataProvider>
      </Router>
      
    </div>
  );
}

export default App;
