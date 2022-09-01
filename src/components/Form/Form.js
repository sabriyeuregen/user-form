import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [userName, setUserName] = useState();
  const [userSurName, setUserSurName] = useState();
  const [userOption, setUserOption] = useState();

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const surNameChangeHandler = (event) => {
    setUserSurName(event.target.value);
  };
  
  const optionChangeHandler = (event) => {
    setUserOption(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: userName,
      surName: userSurName,
      option: userOption
    };
    props.onSaveUserData(userData);
    setUserName("");
    setUserSurName("");
    setUserOption("")
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input type="text" onChange={nameChangeHandler}></input>
      <label>SurName</label>
      <input type="text" onChange={surNameChangeHandler}></input>
      <select onChange={optionChangeHandler}>
        <option value="grapefruit">Backend</option>
        <option value="lime">Frontend</option>
        <option value="coconut">
          Mobile
        </option>
        <option value="mango">Test</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};
export default Form;
