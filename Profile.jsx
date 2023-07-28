import { useState } from "react";

const Profile=(props)=>{
    const [count,setCount]=useState(0)
    return(
        <>
        <h1>profile Component</h1>
        <h2>Name:{props.name}</h2>
        <h3>Count:{count}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>SetCount</button>
        </>
    );
}
export default Profile;