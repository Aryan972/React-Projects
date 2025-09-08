import { useState } from "react";

function Checkbox(){

    const [skills,setSkills] = useState([]);

    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);

        //checked
        if(event.target.checked){
            setSkills([...skills,event.target.value]);
        }
        //else
        else{
            setSkills([skills.filter((item)=>item!=event.target.value)])

        }
    }

    return(
        
        <div>
            <h3>Select Your skills</h3>

            <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
            <label htmlFor="php">PHP</label>
            <br />
            <br />

            <input onChange={handleSkills} type="checkbox" id="JS" value="JS"/>
            <label htmlFor="JS">JS</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="c" value="c"/>
            <label htmlFor="c">C</label>
            <br />
            <br />

            <input onChange={handleSkills} type="checkbox" id="java" value="java"/>
            <label htmlFor="java">java</label>
            <br />
            <br />


            <h1>{skills}</h1>
        </div>
    )
}

export default Checkbox;