import { useState } from "react";
const Form = (props) => {
  const [userName, setUserName] = useState();
  const [userSurName,setUserSurName]=useState();

  const nameChangeHandler = (event) => {

    setUserName(event.target.value)
  };

  const surNameChangeHandler = (event) => {

    setUserSurName(event.target.value)
  };

  const submitHandler = (event) => {
       event.preventDefault();

       const userData={
        name:userName,
        surName:userSurName
       }
       props.onSaveUserData(userData)
       setUserName("")
       setUserSurName("")

  }

  return (
    <form onSubmit={submitHandler}>
      <label >Name</label>
      <input type="text" onChange={nameChangeHandler}></input>
      <label >SurName</label>
      <input type="text" onChange={surNameChangeHandler}></input>
      <button type="submit">Add User</button>
    </form>
  );
};
export default Form;
