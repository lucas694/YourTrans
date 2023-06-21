import "./BtnBase.css";

const BtnBase = (props) => {
  const {className, onClick} = props;

  return(
    <button className={`BtnBase ${className}`} onClick={onClick}>
      {props.children}
    </button>
  )
};export default BtnBase;