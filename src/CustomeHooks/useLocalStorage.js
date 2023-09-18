import { useEffect } from "react";
export default function useLocalStorage(value, isloading) {

    useEffect(() => {
        // console.log("localstorage")
        // if (!isloading)
        //     localStorage.setItem('todos', JSON.stringify(value));
    }, [value, isloading]);
}