import React from "react"
import UserClass from "./UserClass";
class UserClassParent extends React.Component{
constructor(props){
    super(props)
    console.log("LifeCycle" ,"1.Parentconstructor");
};
componentDidMount(){
    console.log("LifeCycle" ,"3.ParentcomponentDidMount");
    //Api call
    fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(moviesNewList => (
console.log(moviesNewList,"moviesNewList")));
  }
  componentDidUpdate(){
    this.timer = setTimeout(()=>{
        console.log("React JS");
    },1000);
    console.log("com did Update");
  };
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
    render(){
        console.log("LifeCycle" ,"2.ParentRender");
        return(
            <div>UserClassParent
                <UserClass name={"test"} />
            </div>
        )
    }
}
export default UserClassParent;