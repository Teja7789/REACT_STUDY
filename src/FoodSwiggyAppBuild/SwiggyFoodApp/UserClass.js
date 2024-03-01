

import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { location: "HYD",
    count:1,
    count2:2,
    login:"test"}
        this.handleLocation = this.handleLocation.bind(this);
   
        console.log("LifeCycle" ,"1.Childconstructor")
      }
 
    handleLocation(){
    this.setState({location: "AMP"});

    }
    
  render() {
    console.log("LifeCycle" ,"2.Childrender")
    return (
      <div>{this.props.name}
      <h1>count:{this.state.count} count2:{this.state.count2}</h1>
      <button onClick={
        ()=>{this.setState({count:this.state.count+1,
        count2:this.state.count2+1
        })}
      }>Count</button>
      {this.state.location}
      <input value={this.state.login}
               onChange={this.handleChange} />
      <button onClick={
        
        // () => this.setState({location:"Delhi"})
        this.handleLocation
        }>Change Location</button>
      </div>
    )
  }
  handleChange(e) {
    this.setState({login: e.target.value});
  }
}
