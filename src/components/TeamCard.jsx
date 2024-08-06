import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/TeamCard.css";

function TeamCard({ fullname, title, slug, picture, pictureAlt }) {
  const linkHref = `/ortaklarimiz/${slug}`;
  return (
    <>
      <Link to={linkHref}>
        <div className="team-card">
          <div className="team-card-img">
            <a href="#">
              <img
                loading="lazy"
                className="blog-card-cover"
                src={picture}
                alt={pictureAlt}
              />
            </a>
          </div>
          <span className="team-member-name mt-8 mb-8">
            <a href="">{fullname}</a>
          </span>
          <span className="team-member-status">{title}</span>
        </div>
      </Link>
    </>
  );
}

export default TeamCard;
