import HeaderLogo from "../assets/HeaderLogo.png";
import "./HeaderMobile.css";
import { useState } from "react";
import {BiMenu,BiMenuAltRight} from "react-icons/bi";
import {FaHome,FaInfoCircle,FaSuitcase} from "react-icons/fa";
import {VscFeedback} from "react-icons/vsc";
import {TiContacts} from "react-icons/ti";


const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return(
    <div className={"HeaderMobileContainer"}>
      <div className={"HeaderMobileContent"}>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderLogo"}/>
        <button className={"BtnMenu"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <BiMenuAltRight className={"BtnMenuIcon"}/> : <BiMenu className={"BtnMenuIcon"}/>}
        </button>
        <div className={isMenuOpen ? "HeaderMenuContainerOpen" : "hidden"}>
          <ul className={"UlMobileHeader"}>
            <li className={"LiHeaderMobile"}>
              <FaHome className={"LiHeaderMobileIcon"}/>
              <a href={"#Home"}>Home</a>
            </li>
            <li className={"LiHeaderMobile"}>
              <FaInfoCircle className={"LiHeaderMobileIcon"}/>
              <a href={"#AboutUs"}>About Us</a>
            </li>
            <li className={"LiHeaderMobile"}>
              <FaSuitcase className={"LiHeaderMobileIcon"}/>
              <a href={"#Services"}>Services</a>
            </li>
            <li className={"LiHeaderMobile"}>
              <VscFeedback className={"LiHeaderMobileIcon"}/>
              <a href={"#Testimonial"}>Testimonials</a>
            </li>
            <li className={"LiHeaderMobile"}>
              <TiContacts className={"LiHeaderMobileIcon"}/>
              <a href={"#Contact"}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};
export default HeaderMobile;