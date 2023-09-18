import { useEffect } from "react";

export default function useLogger(value){


    useEffect(()=>{

        // console.log(`todo updated  ${value.length}`);
    },[value])
}