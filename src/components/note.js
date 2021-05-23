import { connect } from 'react-redux';
import {Component} from 'react'
const all={
    marginBottom:'0px'
}
const header ={
    backgroundColor:"#8fbc8f", color:"white", padding:"5px" , textAlign:'center', fontSize:'20px' 

}
const Text ={
     color:" #808080", padding:"15px" ,marginLeft:'25px' , fontSize:'30px' 

}
const text ={
    marginBottom:'0px', marginLeft:'25px' , fontSize:'20px' , width:'400px' ,color:'#4C4946'

}
const text2 ={
    height:'200px',marginLeft:'25px' , fontSize:'20px' , width:'400px'
}
const Content ={
    backgroundColor:'#F5F5F5	' , padding:'5px'
}
const button={
    marginLeft:'25px' , backgroundColor:"#8fbc8f" , color:' white' , padding:'10px'
}
class Note extends Component {
  constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={all}>
                <div style={header}>
                    <h1>Note App</h1>
                </div>
                <div style={Content}>
                <div>
                    <h2 style={Text}>Add a note :</h2>
                    <h3 style={text}>Title : </h3>
                    <input style={text}></input>
                    <h3 style={text}>Content : </h3>
                    <input style={text2}></input>
                    
                </div>
                <div>
                <button style={button}>Add Note</button>
                </div>
                </div>
                
            </div>
         );
    }
}
 
export default Note;