import HeroPage from "../../components/HeroPage";
import bg from "../../assets/images/hero-cover-hizmetlerimiz.jpg";
import BlockLoading from "../../components/BlockLoading";
import { getServices } from "../../services/index";
import { Link } from "react-router-dom";
import "../../assets/styles/pages/ourServices.css";
import { useEffect, useState } from "react";

function OurServices() {
  const [services, setServices] = useState([]);
  const servicesHalf = Math.round(services.length / 2);
  const services1 = services.slice(0, servicesHalf);
  const services2 = services.slice(servicesHalf);

  useEffect(() => {
    async function getData() {
      const data = (await getServices()) || [];
      setServices(data);
    }
    getData();
  }, []);

  return (
    <div>
      <HeroPage src={bg} title={"Hizmetlerimiz"} />
      <div className="our-services">
        <h3 className="title-color-red">
          Hizmetlerimiz hakkında daha fazla bilgi almak için tıklayınız.
        </h3>
        {services.length === 0 ? (
          <BlockLoading />
        ) : (
          <div className="our-services-container">
            <div className="our-services-box">
              <ul className="text-md text-center">
                {services1.map((service) => (
                  <li key={service.node.slug}>
                    <Link to={`/hizmetlerimiz/${service.node.slug}`}>
                      <a>{service.node.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="our-services-box">
              <ul className="text-md text-center">
                {services2.map((service) => (
                  <li key={service.node.slug}>
                    <Link to={`/hizmetlerimiz/${service.node.slug}`}>
                      <a>{service.node.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OurServices;
