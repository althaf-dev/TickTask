import apiRequest from "../apiRequest";
async function patch(data,id){

    const API_URL = `http://localhost:3500/items/${id}`;
    const options = {
  
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }
    // console.log(JSON.stringify(data))
    console.log('patching');
    const result = await apiRequest(API_URL,options);
    if (result) console.log(result);
  }
  export default patch;