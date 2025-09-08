import { useEffect, useState } from "react";
function Props(){

    const [time,setTime] = useState(0);
    const [color,setColor] = useState('green');

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return(
        <div>
            <h1>Default Props in React Js</h1>

            <select onChange={(event)=>setColor(event.target.value)}>
                <option value={"red"}>Red</option>,
                <option value={"blue"}>Blue</option>,
                <option value={"green"}>Green</option>,
                <option value={"orange"}>Orange</option>
            </select>
            <h2
            style={{color:color, backgroundColor:'#000', width:"100px", padding:"10px",borderRadius:"10px"}}
            >{time}</h2>

        </div>
    )
}

export default Props;