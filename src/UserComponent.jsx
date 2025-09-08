import User from "./ReuseComponentUser";
function Reuse(){

    const userData = [
    {
      name: "Abhi",
      age: 23,
      email: "abhi@gmail.com",
      id: 4,
    },

    {
      name: "sam",
      age: 25,
      email: "sam@gmail.com",
      id: 2,
    }
];

    return(
        <div>
            <h3> Resusing Component</h3>
            
                {userData.map((user) => (
                    <div key={user.id}>
                        <User data={user}/>
                    </div>
                ))}
        </div>
    )
}

export default Reuse;