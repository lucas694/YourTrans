import "./AboutUs.css";
import AboutImg from "../assets/AboutRight.png";
import BtnBase from "./Buttons/BtnBase";

const AboutUs = () => {
  return(
    <div className={"AboutUsContainer"} id={"AboutUs"}>
      <div className={"AboutUsContent"}>
        <div className={"AboutLeft"}>
          <h1 className={"AboutTitle"}>Who we are</h1>
          <p className={"AboutDesc"}>Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat elementum ut. Volutpat nullam tellus egestas scelerisque tellus</p>
          <p className={"AboutDesc"}>Id pellentesque eget sollicitudin quis morbi arcu. Id etiam sed dui tellus purus morbi aenean. Quis non non massa ut amet. Nec id sed ullamcorper tincidunt egestas sit. Ac elementum in justo feugiat netus suspendisse molestie. Tortor eget mattis aliquet at nunc elementum ornare aliquet placerat. </p>
          <div className={"AboutBtnSec"}>
            <BtnBase children={"Know More"} className={"BtnBlueAbout"}/>
          </div>

        </div>
        <div className={"AboutRight"}>
          <img src={AboutImg} alt={"AboutImg"} className={"AboutImg"}/>
        </div>
      </div>
    </div>
  )
};export default AboutUs;