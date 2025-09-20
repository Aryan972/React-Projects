
import styled from 'styled-components';

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {

    const arr = [1,2,3,4,5,6];
    // const [selectedNumber, setSelectedNumber] = useState(); moving it to the parent component to synchronize the score and dice selection

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");//if number is selected then error should be removed
    }
    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arr.map((value,i) => (
                    <Box
                        isSelected={value == selectedNumber}
                        key = {i}  
                        onClick={() => numberSelectorHandler(value)}
                    >
                        {value}
                    </Box>))}
             </div>

             <p>Select Number</p>
        </NumberSelectorContainer>
        
    )
}

export default NumberSelector;


const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
    
    
    .error{
        color: red;
    }

    .flex{
        display: flex;
        gap: 24px;

    }

    p{
        font-size: 24px;
        font-weight: 700px;
    }


`;


const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    border-radius: 10px;
    display: grid;
    place-items: center;
    font-size: 34px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};

`;
