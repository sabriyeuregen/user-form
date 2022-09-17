import Button from "../Button/Button";

const Modal=(props)=>{

    return(<div onClick={props.onConfirm}>
    <header>
        <h2>{props.title}</h2>
    </header>
    <div>
        <p>
         {props.message}
        </p>
    </div>
    <footer>
     <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
    </div>)
}
export default Modal;