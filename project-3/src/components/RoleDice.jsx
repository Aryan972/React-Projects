
import styled from 'styled-components';

const RoleDice = ({currentDice, generateRandomeNumber}) => {

    // const [currentDice, setCurrentDice] = useState(1); //moved it to the parent component to synchronize the score and dice selection

    //moving the function to the parent component to synchronize the score and dice selection
    // const generateRandomeNumber = () => {                    
    //     const randomeNumber = Math.floor(Math.random() * 6) + 1;
    //     setCurrentDice(randomeNumber);
    // }   




  return (
    <DiceContainer>
      <div className='dice' onClick={generateRandomeNumber}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;

    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
`;