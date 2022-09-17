const UsersList = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <ul>
          <li> key={user.id}</li>
          <li>{user.name} </li>
          <li>{user.surname}</li>
          <li>{user.option}</li>
          <li>{user.date}</li>
          <li>{user.number}</li>
          <li>{user.email}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
};
export default UsersList;
