function Array() {
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
    },
  ];

  return (
    <div>
      <h1> Loop in JSX with Map function</h1>

      <h3>Table without loop</h3>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>2</td>
            <td>Sam</td>
            <td>dvdfdd</td>
            <td>5</td>
          </tr>
        
          <tr>
            <td>3</td>
            <td>AAdi</td>
            <td>AAdi@gmail.com</td>
            <td>23</td>
          </tr>
          
          <tr>
            <td>4</td>
            <td>Anil</td>
            <td>dfsbdf</td>
            <td>56</td>
          </tr>
        </tbody>
      </table>

      <h3> Table with loop using map</h3>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Array;
