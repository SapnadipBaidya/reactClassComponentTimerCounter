import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state={date: new Date().getSeconds()}
        //this.state is an object which contains variables , which will be used to manipulate ui   
    }

    
    tick(){
        this.setState({date:new Date().getSeconds()})
    }
//The componentDidMount() method runs after the component output has been rendered to the DOM
    componentDidMount(){
       
     this.timerID= setInterval(() => {
        this.tick()
      }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID) //similat to return in
    }

    
  render() {
    let {date}=this.state
      return (
      <div>{date}</div>
    )
  }
}
