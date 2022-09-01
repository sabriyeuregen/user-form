import { useState } from "react";

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
    <form onSubmit={submitHandler} className="block ">
      <label className="block text-sm font-medium text-slate-700">Name</label>
      <input type="text" onChange={nameChangeHandler}></input>
      <label className="block text-sm font-medium text-slate-700">SurName</label>
      <input type="text" onChange={surNameChangeHandler}></input>
      <select onChange={optionChangeHandler} className="block text-sm font-medium text-slate-700">
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="mobile">
          Mobile
        </option>
        <option value="test">Test</option>
      </select>
      <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add User</button>
    </form>
  );
};
export default Form;
