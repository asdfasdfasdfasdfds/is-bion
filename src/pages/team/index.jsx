import React, { useEffect, useState } from "react";
import HeroPage from "../../components/HeroPage";
import TeamCard from "../../components/TeamCard";
import bg from "../../assets/images/hero-cover-ekibimiz.jpg";
import { getMember } from "../../services/index";
import "../../assets/styles/pages/team.css";
import BlockLoading from "../../components/BlockLoading";

function Team() {
  const [teamMember, setTeamMember] = useState([]);
  useEffect(() => {
    // Fetch data at build time
    async function getData() {
      const data = (await getMember()) || [];
      setTeamMember(data);
    }
    getData();
  }, []);

  return (
    <div>
      <HeroPage src={bg} title={"Takım"} />
      <div className="team-container">
        <div className="team-cards">
          {teamMember.length === 0 ? (
            <BlockLoading />
          ) : (
            teamMember.map((teamMember) => (
              <TeamCard
                fullname={teamMember.node.fullname}
                title={teamMember.node.title}
                bio={teamMember.node.bio}
                email={teamMember.node.email}
                phone={teamMember.node.phone}
                slug={teamMember.node.slug}
                key={teamMember.node.slug}
                picture={teamMember.node.picture.url}
                pictureAlt={teamMember.node.title}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;
