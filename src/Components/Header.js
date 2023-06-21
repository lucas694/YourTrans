import "./Header.css";
import HeaderLogo from "../assets/HeaderLogo.png";
import BtnBase from "./Buttons/BtnBase";

const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderLogo"}/>

        <ul className={"UlHeader"}>
          <li className={"LiHeader"}><a href={"#Home"}>Home</a></li>
          <li className={"LiHeader"}><a href={"#AboutUs"}>About Us</a></li>
          <li className={"LiHeader"}><a href={"#Services"}>Services</a></li>
          <li className={"LiHeader"}><a href={"#Testimonial"}>Testimonials</a></li>
          <li className={"LiHeader"}><a href={"#Contact"}>Contact Us</a></li>
        </ul>
        <BtnBase children={"Contact Us"} className={"BtnBlue"}/>
      </div>

    </div>
  )
};export default Header;