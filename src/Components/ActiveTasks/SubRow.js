import React, { useContext} from 'react'
import { Appcontext } from '../../Appcontext'

function SubRow(props) {
const {showTagList,setShowTagList} = useContext(Appcontext)

  return (
    <div className='row '>
        <div className="col-3">
            <p>{props.props.tdo.DueDate?props.props.tdo.DueDate.toDateString():null}</p>
        </div>
        <div className="col-3 word-wrap">
          <p>{props.props.tdo.tags?props.props.tdo.tags.map((tag,i)=>{

            let bg = "#"+(tag.color[0]).toString(16)+(tag.color[1]).toString(16)+(tag.color[2]).toString(16)+(40).toString(16);
            let fc = "#"+(tag.color[0]+5).toString(16)+(tag.color[1]+10).toString(16)+(tag.color[2]+10).toString(16);
            if(i<3 && !showTagList){
              return( <i className='me-2  rounded-top-right-1 rounded-bottom-right-1  tagtext'style={{backgroundColor:bg,color:fc,borderColor:bg}}>{tag.tg}</i>)
            }
            else if (i===3 && !showTagList){
              return(<i onClick={()=>{
                console.log("clicked");
                setShowTagList(true);
               
              }}><span className='border rounded-circle p-1 bg-secondary'>+{props.props.tdo.tags.length}</span></i>)
            }
            else{
              return null;
            }
            
         
          
          
          
          }):null}</p>
           
        </div>
     
      
    </div>
  )
}

export default SubRow
