import NewUser from "./components/NewUser/NewUser";

const App = () => {

  const addUserHandler=(user)=>{

    console.log(user)
  }


  return (
    <div className="App">
      <NewUser  onAddUser={addUserHandler}></NewUser>
    
    </div>
  );
}

export default App;
