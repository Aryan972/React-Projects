import { useState } from "react";

function Radio(){

    const[gender,setGender] = useState('female');

    const[city,setCity] = useState('Noida');

    return(

        <div>

            <h1>Radio button and Dropdown</h1>

            <h3>Select Gender</h3>
            <input  type="radio" onChange={(event)=>setGender(event.target.value)} value={'male'} name="gender" 
            checked={gender=='male'} id="male" />
            <label htmlFor="male">Male</label>

            <input  type="radio" onChange={(event)=>setGender(event.target.value)}  value={'female'} name="gender1" 
            checked={gender=='female'} id="female" />
            <label htmlFor="female">Female</label>

            <h3>Selected Gender:{gender} </h3>
            <br />

            
            <h3>Select City</h3>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={'Lko'}>
                <option value="Lko">Lko</option>
                <option value="noida">Noida</option>
                <option value="Bengaluru">Bengaluru</option>
            </select>

            <h4>Selected City:{city}</h4>

        </div>
    )
}

export default Radio;
