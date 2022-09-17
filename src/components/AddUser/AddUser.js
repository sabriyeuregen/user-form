import { useState } from "react";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userSurName, setUserSurName] = useState("");
  const [userOption, setUserOption] = useState("");
  const [userDate, setUserDate] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const surNameChangeHandler = (event) => {
    setUserSurName(event.target.value);
  };

  const optionChangeHandler = (event) => {
    setUserOption(event.target.value);
  };
  const userDateChangeHandler = (event) => {
    setUserDate(event.target.value);
  };
  const userNumberChangeHandler = (event) => {
    setUserNumber(event.target.value);
  };
  const userEmailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userSurName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    props.onAddUser(userName,userSurName, userOption , userDate, userNumber, userEmail, userAge );
    setUserName("");
    setUserSurName("");
    setUserOption("");
    setUserDate("");
    setUserNumber("");
    setUserEmail("");
    setUserAge("");
    
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={addUserHandler} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              onChange={nameChangeHandler}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={userName}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
            >
              SurName
            </label>
            <input
              type="text"
              onChange={surNameChangeHandler}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
              value={userSurName}
            ></input>
          </div>
          <div>
            <select
              onChange={optionChangeHandler}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={userOption}
            >
              <option value="backend">Backend</option>
              <option value="frontend">Frontend</option>
              <option value="mobile">Mobile</option>
              <option value="test">Test</option>
            </select>
          </div>
          <label>Birthday</label>
          <input
            value={userDate}
            type="date"
            onChange={userDateChangeHandler}
          ></input>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">
              Telephone Number
            </label>
            <input
              type="tel"
              onChange={userNumberChangeHandler}
              placeholder="555-555-55-55"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={userNumber}
            ></input>
          </div>
          <label>Enter your email</label>
          <input
            type="email"
            onChange={userEmailChangeHandler}
            value={userEmail}
          ></input>
          <label>Age</label>
          <input
            type="number"
            onChange={userAgeChangeHandler}
            min="18"
            max="60"
            step="1"
            value={userAge}
          ></input>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
