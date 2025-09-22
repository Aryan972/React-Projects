import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000"; //exporting to use in SearchResult

const App = () => {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all"); //use to filter using buttons
  
  useEffect(() => {
    
    const fetchFoodData = async () => {
    
    setLoading(true);

    try{

      const response = await fetch(BASE_URL);
      const json = await response.json();

      console.log(json);
      setData(json);
      setFilteredData(json);
      setLoading(false);
    }
    catch(error){
      setError("Unable to fetch data");
    }
  };
  fetchFoodData();
  },[])

  //function to search the food
  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if(searchValue === "") setFilteredData(null);

    const filter = data?. filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);

  }

  const filterFood = (type) => {
    if(type == "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?. filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);

  }
  
  if(error) return <div>{error}</div>;
  if(loading) return <div>loading......</div>;

  //map to avoid the repition of buttons code
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    }
  ];
  

  return( 
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/public/images/logo.svg" alt="Logo" />
          </div>

          <div className="search">
            <input onChange={searchFood}  placeholder="Search Food..." />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
            </Button>
          ))}
            {/* <Button onClick={() => filterFood("all")}>All</Button>
            <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
            <Button onClick={() => filterFood("lunch")}>Lunch</Button>
            <Button onClick={() => filterFood("dinner")}>Dinner</Button> */}
        </FilterContainer>
      </Container>

      <SearchResult data = {filteredData}/>
    </>


  );
};

export default App;

export const Container = styled.div`
   max-width: 1200px;
   margin: 0 auto;
`;

const TopContainer = styled.div`
    height: 140px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;

    .search{
      input{
        background-color: transparent;
        border: 1px solid red;
        border-radius: 5px;
        height: 40px;
        font-size: 16px;
        padding: 0 10px;
        color: white;
        &::placeholder{
          color: white;
        }
      }
    }

    //to make it responsive so that there shouldn't be any gap between the Food Zone and Search Food bar
    @media (0 < width < 600px){
      flex-direction: column;
      height: 120px;
    }
`;

const FilterContainer = styled.div`
      display: flex;
      justify-content: center;
      gap: 12px;
      padding-bottom: 40px;
`;

export const Button = styled.button` //export to use in other files as well
    background: red;
  
    border-radius: 5px;
    padding: 6px 12px;
    border: none;
    color: white;
    cursor: pointer;
    &:hover{
      background-color: #b40b0bff;
    }

`;



