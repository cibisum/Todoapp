import React, { Component } from 'react'


class Singletodo extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    

    render(){
        return(
            <li>{this.props.todo}<button  id='deletebtn' onClick={this.props.delete}>Delete</button></li>
        )
    }
}


export default Singletodo