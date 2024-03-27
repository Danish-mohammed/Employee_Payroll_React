import React, { Component } from 'react'
import logo from '../logo192.png'
import Hello from './Hello'
export class About extends Component {
    constructor() {
        super()
        this.state = {
          name: '',
          count: 0
        }
      }
    
      clickImage(event){
        console.log(event);
        window.open("https://www.google.com")
      }
    
      changeInput = (event) =>{
        console.log(event.target.value);
        this.setState({
          name: event.target.value
        })
    
      }
      render() {
        console.log();
        return (
          <div>
            <h1>Hello {this.state.name}</h1>
            <h2>{this.state.count}</h2>
            <input type="text" onChange={this.changeInput}></input>
            <img src={logo} alt="logo" onClick={this.clickImage}/>
            <Hello />
          </div>
        )
      }
}

export default About