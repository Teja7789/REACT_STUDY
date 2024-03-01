import React from "react"
import UserClass from "./UserClass";
class UserClassParent extends React.Component{
constructor(props){
    super(props)
    console.log("LifeCycle" ,"1.Parentconstructor");
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