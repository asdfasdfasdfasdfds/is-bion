import React from "react";
import Hero from "../components/Hero";
import HeroPage from "../components/HeroPage";
import bg from "../assets/images/hero-cover-hakkinda.jpg";
import Container from "../components/Container";
import indexTexts from '../constants/indexTexts';

function aboutUs() {
  return (
    <div>
      <HeroPage src={bg} title={"Hakkımızda"} />
      <Container title={"Hakkımızda"} text={indexTexts.hakkinda} bold={"Referanslarımız Değerlerimizdir..."} />
      <Hero
        title={"Bize Hemen Ulaşın"}
        src={bg}
        button={"İletişim"}
        href={"/iletisim"}
      />
    </div>
  );
}

export default aboutUs;
