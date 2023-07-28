import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        //create state
        this.state={
            count:0,
        };
        console.log("child-constructor")
    }
    componentDidMount(){
        console.log("child-componentDidMount")
    }
    render(){
        //const {count}=this.state;
        console.log("child-render");
        return(
            <div>
                <h1>Profile class component</h1>
                <h2>Name:{this.props.name}</h2>
                <h2>XYZ:{this.props.xyz}</h2>
                <h2>Count:{this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:1,
                    })
                }}>SetCount</button>
            </div>
        )
    }
}
export default Profile;