import { createContext } from "react";
import {useState, useReducer } from "react";
import { reducerTodo, reducerTodos, reducerTags, reducerFilter, reduceUser } from "./stateLogics";
import { Todo_URL, filter } from "./Utilities/Data";
import useLogger from "./CustomeHooks/useLogger";
import useFetch from "./CustomeHooks/useFetch";
import useLocalStorage from "./CustomeHooks/useLocalStorage";
export const Appcontext = createContext({});

export const DataProvider = ({ children }) => {

    const [stateTodo, dispatchTodo] = useReducer(reducerTodo, { todo: null });
    const [stateTodos, dispatchTodos] = useReducer(reducerTodos, [{id:null, tags: [] }]);
    const [stateTags, dispatchTags] = useReducer(reducerTags, [])
    const [stateFilter, dispatchFilter] = useReducer(reducerFilter, filter)
    const [user, dispatchUser] = useReducer(reduceUser, [])

    const [tag, setTag] = useState("");
    const [userName,setUname] =  useState(' ');
    const [tags, setTags] = useState([]);
    const [showTagList, setShowTagList] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const [editMode, SetEditMode] = useState(false);
    const [Filter, setFilter] = useState([{
      priority: ['1', '2', '3', '0'],
      tags: 'all', due: 'all'
    }]);
    const [search, setSearch] = useState("");
    const [tagAdd, SetTagAdd] = useState(false);
     useLogger(stateTodos);
     useLocalStorage(stateTodos,isloading);
    //  useFetch(dispatchTodos,setFetchError,setIsloading,Todo_URL,userName);
    return (
        <Appcontext.Provider value={{
            tags: tags,
            setTags: setTags,
            tag: tag,
            setTag: setTag,
            showTagList,
            setShowTagList,
            Filter,
            setFilter,
            editMode,
            SetEditMode,
            stateTodo,
            dispatchTodo,
            stateTodos,
            dispatchTodos,
            tagAdd, SetTagAdd,
            stateTags,
            dispatchTags,
            stateFilter,
            dispatchFilter,
            user,
            dispatchUser,
            search,
            setSearch,
            setFetchError,
            setIsloading,
            isloading,
            fetchError,
            userName,
            setUname
          }}>
          {children} 
        </Appcontext.Provider>
    )
}