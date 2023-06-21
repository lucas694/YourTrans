import "./Footer.css";
import LogoFooter from "../assets/FooterLogo.png"
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsFillTelephoneFill} from "react-icons/bs";
import {FaEnvelope} from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterContent"}>
        <div className={"FooterLeft"}>
          <img src={LogoFooter} className={"FooterLogo"} alt={"s"}/>
          <p className={"FooterDesc"}>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.</p>
          <div className={"FooterSocial"}>
            <BsFacebook className={"FooterSocialIcons"}/>
            <BsTwitter className={"FooterSocialIcons"}/>
            <BsLinkedin className={"FooterSocialIcons"}/>
            <BsInstagram className={"FooterSocialIcons"}/>
          </div>
        </div>
        <div className={"FooterMiddle"}>
          <ul>
            <h1 className={"FooterMiddleTitle"}>Pages</h1>
            <li className={"FooterLi"}>Home</li>
            <li className={"FooterLi"}>About US</li>
            <li className={"FooterLi"}>Blog</li>
            <li className={"FooterLi"}>Products</li>
          </ul>
          <ul>
            <h1 className={"FooterMiddleTitle"}>Contact</h1>
            <li className={"FooterLiC"}>
              <BsFillTelephoneFill className={"FooterLiIcons"}/> (406) 555-0120
            </li>
            <li className={"FooterLiC"}>
              <FaEnvelope className={"FooterLiIcons"}/> zyncabiotics123@gmail.com
            </li>
            <li className={"FooterLiC"}>
              <FaMapMarkerAlt className={"FooterLiIcons"}/> 2972 Jamshedpur, Jharkhand Pin-831015
            </li>
          </ul>
        </div>
        <div className={"FooterRight"}>
          <h1 className={"FooterRightTitle"}>Newsletter</h1>
          <div className={"FooterRightInput"}>
            <input type={"text"} placeholder={"Your e-mail"} />
            <button className={"FooterRightBtn"}>Track Order</button>
          </div>
        </div>

      </div>
      <div className={"FooterCopy"}>
        <h1 className={"FooterCopyText"}>© 2023 YourTrans | Powered by BADAL</h1>
        <div className={"FooterCopySocial"}>
          <BsFacebook className={"FooterCopySocialIcons"}/>
          <BsTwitter className={"FooterCopySocialIcons"}/>
          <BsLinkedin className={"FooterCopySocialIcons"}/>
          <BsInstagram className={"FooterCopySocialIcons"}/>
        </div>
      </div>

    </div>
  )
};export default Footer;