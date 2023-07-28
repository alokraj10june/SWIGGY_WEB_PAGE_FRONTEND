import { Outlet } from "react-router-dom"
import React from "react";
import ProfileFunctionalComponent from './Profile'
import Profile from "./ProfileClass"

// const About=()=>{
//     return(
//         <div>
//             <h1>About us page</h1>
//             <p>Finding the path</p>
//             <ProfileFunctionalComponent name={"Aman raj"}/>
//             <Profile name={"Alok Raj"} xyz={"ABC"}/>
//         </div>
//     )
// }
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent-constructor")
    }
    componentDidMount(){
        console.log("parent-compontdidmount")
    }
    render(){
        console.log("parent-render")
        return(
            <div>
                <h1>About us page</h1>
                <p>Finding the path</p>
                <Profile name={"Alok Raj"} xyz={"ABC"}/>
            </div>
        )
    }
}
export default About