import "./Services.css";
import ServicesCard from "./Cards/ServicesCard";
import RailExpress from "../assets/Cards/RailExpress.png";
import NearByFurniture from "../assets/Cards/NearBy.png";
import SurfaceExpress from "../assets/Cards/SurfaceEx.png";
import AirExpress from "../assets/Cards/AirExpress.png";
import DomesticAir from "../assets/Cards/DomesticAir.png";
import ColdChain from "../assets/Cards/ColdChain.png";
import Eletronics from "../assets/Cards/Electronics.png";

const ServicesCardsData = [
  { id: 1, CardTitle: "Rail Express", CardImg: RailExpress },
  { id: 2, CardTitle: "Near By Furniture", CardImg: NearByFurniture },
  { id: 3, CardTitle: "Surface Express", CardImg: SurfaceExpress },
  { id: 4, CardTitle: "Air Express", CardImg: AirExpress },
  { id: 5, CardTitle: "Domesctic Air Express", CardImg: DomesticAir },
  { id: 6, CardTitle: "Cold Chain Express", CardImg: ColdChain },
  { id: 7, CardTitle: "Near By Electronics", CardImg: Eletronics },
];

const Services = () => {
  return (
    <div className={"ServicesContainer"} id={"Services"}>
      <div className={"ServicesContent"}>
        <h1 className={"ServicesTitle"}>Services</h1>

        <div className={"ServicesCardsBox"}>
          <ServicesCard isWideCard={true} CardImg={ServicesCardsData[0].CardImg} CardTitle={ServicesCardsData[0].CardTitle} />
          <ServicesCard isWideCard={false} CardImg={ServicesCardsData[1].CardImg} CardTitle={ServicesCardsData[1].CardTitle} />
        </div>

        <div className={"ServicesCardsBox"}>
          <ServicesCard isWideCard={false} CardImg={ServicesCardsData[2].CardImg} CardTitle={ServicesCardsData[2].CardTitle} />
          <ServicesCard isWideCard={false} CardImg={ServicesCardsData[3].CardImg} CardTitle={ServicesCardsData[3].CardTitle} />
          <ServicesCard isWideCard={false} CardImg={ServicesCardsData[4].CardImg} CardTitle={ServicesCardsData[4].CardTitle} />
        </div>

        <div className={"ServicesCardsBox"}>
          <ServicesCard isWideCard={false} CardImg={ServicesCardsData[5].CardImg} CardTitle={ServicesCardsData[5].CardTitle} />
          <ServicesCard isWideCard={true} CardImg={ServicesCardsData[6].CardImg} CardTitle={ServicesCardsData[6].CardTitle} />
        </div>
      </div>
    </div>
  );
};

export default Services;
