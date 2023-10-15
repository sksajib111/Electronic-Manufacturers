import React from "react";
import Footer from "../../shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BodyBanner from "../BodyBanner/BodyBanner";
import Card from "../Card/Card";
import GetInTOuch from "../GetInTOuch/GetInTOuch";
import Reviews from "../../Reviews/Reviews";
import Tools from "../Services/Tools/Tools";
import Summary from "../Summary/Summary";

const Home = () => {
  return (
    <>
      <Banner />
      <Card />
      <Tools />
      <BodyBanner />
      <Reviews></Reviews>
      <GetInTOuch />
      <Summary />
      <Footer />
    </>
  );
};

export default Home;
