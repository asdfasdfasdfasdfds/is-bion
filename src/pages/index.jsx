import Button from "../components/Button";
import Container from "../components/Container";
import Form from "../components/Form";
import mainPageContactHeroImage from "../assets/images/home-page-contact-hero.jpeg";
import mainPageHeroImage from "../assets/images/main-page-hero.jpeg";
import indexTexts from "../constants/indexTexts";
import "../assets/styles/pages/index.css";

export default function Home() {
  return (
    <div>
      <div className="home-page-intro">
        <img
          src={mainPageHeroImage}
          alt=""
          // layout="fill" objectFit="cover"  TODO:
        />
        <div className="opacity-medium"></div>
      </div>
      <Container
        title={"Referans Hukuk Bürosu"}
        text={indexTexts.hakkinda}
        bold={"Referanslarımız Değerlerimizdir..."}
      />
      <div className="service-and-contact-us">
        <div className="services-point">
          <img
            src={mainPageContactHeroImage}
            alt=""
            // layout="fill" TODO:
            // objectFit="cover" TODO:
          />
          <div className="opacity-medium"></div>
          <div className="services-point-box">
            <h3>İletişim Adresimiz</h3>
            <div className="text-md text-color-white text-center">
              Referans Hukuk Bürosuna ulaşmak ve ayrıntılı bilgi almak için
              butona tıklayınız.
            </div>
            <Button href={"/iletisim"} button={"Harita ve Detaylı Bilgi"} />
          </div>
        </div>
        <div className="contact-us">
          <div className="contact-us-container">
            <h3 className="title-color-red">Bizimle İletişime Geçin</h3>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
