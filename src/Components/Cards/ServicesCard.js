import "./ServicesCard.css"

const ServicesCard = (props)=> {
  const {isWideCard,CardImg,CardTitle} = props;
  return(
    <div className={isWideCard ? "ServicesCardContainerWide":"ServicesCardContainerSmall"}>
      <img className={"ServicesCardImg"} src={CardImg} alt={"ServicesCardImg"}/>
      <h1 className={"ServicesCardTitle"}>{CardTitle}</h1>
    </div>
  )
};export default ServicesCard;