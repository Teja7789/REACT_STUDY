import React, { useEffect } from "react";
import UserClass from "./UserClass";

const UserClassFunction = (props) => {
    useEffect(() => {
        console.log("LifeCycle", "3.ParentcomponentDidMount");
        // Api call
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(moviesNewList => console.log(moviesNewList, "moviesNewList"));

        return () => {
            clearInterval(timer);
            console.log("componentWillUnmount");
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("React JS");
        }, 1000);
        console.log("com did Update");
        return () => clearTimeout(timer);
    });

    console.log("LifeCycle", "2.ParentRender");

    return (
        <div>
            UserClassParent
            <UserClass name={"test"} />
        </div>
    );
};

export default UserClassFunction;
