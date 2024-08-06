import React, { useEffect, useState } from "react";
import bg from "../../assets/images/hero-cover-ekibimiz.jpg";
import HeroPage from "../../components/HeroPage";
import { getMemberDetails } from "../../services";
import { Link } from "react-router-dom";
import "../../assets/styles/pages/teamSlug.css";
import { useParams } from "react-router-dom";
import BlockLoading from "../../components/BlockLoading";

function TeamDetail() {
  const params = useParams();
  const [teamMember, setTeamMember] = useState({});
  useEffect(() => {
    // Fetch data at build time
    async function getData() {
      const data = await getMemberDetails(params.slug);
      console.log(data);
      setTeamMember(data.edges[0].node);
    }
    getData();
  }, []);

  return (
    <>
      <HeroPage src={bg} title={"Takım"} />
      {teamMember.fullname ? (
        <div className="team-detail-container">
          <div className="team-detail-image-box">
            <div className="team-detail-image">
              <img
                loading="lazy"
                className="blog-card-cover"
                src={teamMember.picture?.url}
                alt={teamMember.fullname}
              />
            </div>
          </div>
          <div className="team-detail-box">
            <div className="team-detail-box-top">
              <div className="team-detail-member">
                <span className="team-detail-member-name">
                  {teamMember.fullname}
                </span>
                <span className="team-detail-member-status">
                  {teamMember.title}
                </span>
              </div>
              <div className="team-detail-contact">
                <span className="team-detail-contact-title">İletişim</span>
                <span className="team-detail-contact-address">
                  {teamMember.email}
                </span>
                <span className="team-detail-contact-address">
                  {teamMember.phone}
                </span>
              </div>
            </div>
            <p className="team-detail-content">{teamMember.bio}</p>
            <Link to="/ortaklarimiz">
              <a className="prev">Takıma Geri Dön</a>
            </Link>
          </div>
        </div>
      ) : (
        <BlockLoading />
      )}
    </>
  );
}

export default TeamDetail;
