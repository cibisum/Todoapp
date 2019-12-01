import React, { Component } from 'react'
import Singletodo from '../Components/singletodo'




class Todo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        todos:[],
        currentTodo:''
      }
     
    }

  

    onChangeinput = e=>{
      this.setState({
        currentTodo:e.target.value
      })
    
    
    }

  onAdding=()=>{
    let todosDup = this.state.todos.slice();
    todosDup.push(this.state.currentTodo);
    this.setState({
      todos:todosDup,
      currentTodo:''
    })


  }

  deletetodo=i=>{
    let copylist = this.state.todos.slice();
    copylist.splice(i,1);
    this.setState({
      todos:copylist
    })
  }
    
  render() {
    let listoftodo= this.state.todos.map((e,i)=>{
      return(

        <Singletodo todo={e} delete={()=>this.deletetodo(i)} />
      )
    })
  
    return (
      <div className='todoapp'>
      <input id='inputfield' placeholder='Enter todo' value={this.state.currentTodo} onChange={this.onChangeinput}/>
      <button id='addbtn' onClick={this.onAdding}>Add</button>
      <br /> 
      {this.state.todos.length===0?"No todos yet":<ul>{listoftodo}</ul>}
      
        
      </div>
    )
  }
}


export default Todo

