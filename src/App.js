import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

import { useState } from "react";
const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uSurName, uOption, uDate, uNumber, uEmail, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName,surname: uSurName,option: uOption,date: uDate,number: uNumber,email: uEmail ,age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
};

export default App;
