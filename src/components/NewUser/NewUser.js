import Form from "../Form/Form";

const NewUser = (props) => {
    
    const saveUserDataHandler=(enteredUserData)=>{
        const userData={
        ...enteredUserData
     
        };
        props.onAddUser(userData)
     
      }
     


  return (<div>
       <Form onSaveUserData={saveUserDataHandler}></Form>
  </div>);
};
export default NewUser;