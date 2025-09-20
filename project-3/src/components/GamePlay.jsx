
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {

  const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(); //moved it from NumberSelector to synchronize the score and dice selection
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState(""); //used to throw the error if number is not selected and dice is rolled
  const [showRules, setShowRules] = useState(false);//to show and hide the rules on button click

  const generateRandomeNumber = () => {  
        if(!selectedNumber){
            setError("Please select a number to roll the dice");
            return; 
        }//used to avoid random number generation if number is not selected

        const randomeNumber = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomeNumber);

        //if number is not selected then value shouldn't be changed
        if(!selectedNumber) return;

        if(selectedNumber == randomeNumber){
            setScore((prev) => prev + randomeNumber);
        }
        else{
            setScore((prev) => prev - 2);
        } 
        //to unset the selected number after each roll
        setSelectedNumber(undefined);
    }   


  const resetScroe = () => {
    setScore(0);
  }

  return (

      <MainContainer>
        <div className='top_section'>
            <TotalScore score={score}/>
            <NumberSelector 
              error = {error} 
              setError = {setError}
              selectedNumber = {selectedNumber} 
              setSelectedNumber = {setSelectedNumber}
            /> 

        </div>
        <RoleDice currentDice={currentDice} generateRandomeNumber={generateRandomeNumber}/>

        <div className="btns">
            <OutlineButton onClick={resetScroe}>Reset Score</OutlineButton>
            <Button
              onClick={() => setShowRules((prev) => !prev)}> {showRules ? "Hide" : "Show"} Rules</Button>
        </div> 
        {showRules && <Rules/>}
      </MainContainer>
 
  );
};

export default GamePlay;

const MainContainer = styled.div`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        gap: 10px;
    }
`;

