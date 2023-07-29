const apiRequest = async (url=' ' ,options=null,errorMessage= null)=>{

    console.log(options);
    try{

        const response = await fetch(url,options);
        if(!response.ok){
            throw Error("Please Reload")
        }


    }catch(err){

        errorMessage = err.message; 
    }finally{

        return errorMessage;
    }
}

export default apiRequest;