const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
    >
        {props.children}
    </button>
  );
};
export default Button;
