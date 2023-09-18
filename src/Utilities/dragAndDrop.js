export const drag = (ev)=> {

    ev.dataTransfer.setData("text", ev.target.id);
  
  }
export const allowDrop = (ev)=> {
    ev.preventDefault();
  }