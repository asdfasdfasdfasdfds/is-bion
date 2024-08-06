import React, { useEffect, useState } from "react";
import HeroPage from "../../components/HeroPage";
import bg from "../../assets/images/hero-cover-hizmetlerimiz.jpg";
import BlockLoading from "../../components/BlockLoading";
import { Link } from "react-router-dom";
import { getServiceDetails, getServices } from "../../services";
import "../../assets/styles/pages/ourServicesSlug.css";
import { useParams } from "react-router-dom";

function OurServicesDetail() {
  const params = useParams();
  const [service, setService] = useState({});
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getServiceDetails(params.slug);
      const services = (await getServices()) || [];
      setService(data.edges[0].node);
      setServices(services);
    }

    getData();
  }, [params.slug]);

  return (
    <div>
      <HeroPage src={bg} title={service.title} />
      <div className="our-services-detail-container">
        <div className="our-services-detail-sidebar">
          <div className="our-services-detail-sidebar-services">
            <h5>ÇALIŞMA ALANLARI</h5>
            <ul>
              {services.map((service) => (
                <li key={service.node.slug}>
                  <Link
                    className={
                      params.slug === service.node.slug ? "active" : ""
                    }
                    to={`/hizmetlerimiz/${service.node.slug}`}
                  >
                    {service.node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {service.content ? (
          <div className="our-services-detail-box">
            <p className="text-md">{service.content}</p>
            <ul>
              {service.list ? (
                service.list.split("\n").map((e, index) => (
                  <li key={index}>
                    <span>{e}</span>
                  </li>
                ))
              ) : (
                <li></li>
              )}
            </ul>
          </div>
        ) : (
          <BlockLoading />
        )}
      </div>
    </div>
  );
}

export default OurServicesDetail;
