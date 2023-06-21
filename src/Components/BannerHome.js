import "./BannerHome.css";
import BannerRight from "../assets/BannerRight.png";

const BannerHome = () => {
  return(
    <div className={"BannerHomeContainer"} id={"Home"}>
      <div className={"BannerHomeContent"}>
        <div className={"HomeContentLeft"}>
          <p className={"HomeLeftSubTitle"}>Ship to and from anywhere in the world</p>
          <h1 className={"HomeLeftTitle"}>Find the best freight quote</h1>
          <p className={"HomeLeftDesc"}>Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat elementum ut. Volutpat nullam tellus egestas scelerisque tellus</p>
          <div className={"HomeLeftInput"}>
            <input type={"text"} placeholder={"Search for Container NO or Booking ID"} />
            <button className={"HomeLeftBtn"}>Track Order</button>
          </div>
        </div>
        <div className={"HomeContentRight"}>
          <img src={BannerRight} alt={"BannerRight"} className={"BannerImg"}/>
        </div>
      </div>
    </div>
  )
};export default BannerHome;