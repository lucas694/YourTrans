import './App.css';
import Header from "./Components/Header";
import BannerHome from "./Components/BannerHome";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Forms from "./Components/Forms";
import Footer from "./Components/Footer";
import HeaderMobile from "./Components/HeaderMobile";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderMobile/>
      <BannerHome/>
      <AboutUs/>
      <Services/>
      <Forms/>
      <Footer/>
    </div>
  );
}

export default App;
