import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/tr";
import "../assets/styles/components/BlogCard.css"
moment.locale("tr");

function BlogCard({
  coverImage,
  coverImageAlt,
  author,
  date,
  title,
  excerpt,
  slug,
}) {
  const linkHref = `/blog/${slug}`;
  return (
    <>
      <div className="blog-card">
        <Link to={linkHref}>
          <a>
            <img
              loading="lazy"
              className="blog-card-cover"
              src={coverImage}
              alt={coverImageAlt}
            />
          </a>
        </Link>
        <div className="blog-card-author">
          Yazan: {author} | {moment(date).format("DD MMMM YYYY")}
        </div>
        <div className="blog-card-title">{title}</div>
        <div className="blog-card-text">{excerpt}</div>
      </div>
    </>
  );
}

export default BlogCard;
