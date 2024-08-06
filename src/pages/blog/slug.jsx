import React, { useEffect, useState } from "react";
import { getPostDetails } from "../../services";
import HeroBackground from "../../assets/images/hero-cover-blog.jpeg";
import HeroPage from "../../components/HeroPage";
import "../../assets/styles/pages/blogSlug.css";
import moment from "moment";
import "moment/locale/tr";
import { useParams } from "react-router-dom";
import BlockLoading from "../../components/BlockLoading";
moment.locale("tr");

const BlogDetails = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await getPostDetails(params.slug);
      setPost(data);
    }
    getData();
  }, []);

  return (
    <>
      <HeroPage src={HeroBackground} title={"Blog"} />
      {post.title ? (
        <div className="blog-detail-container">
          <div className="blog-detail-box">
            <div className="blog-card-detail-title">{post.title}</div>
            <div className="blog-card-author">
              Yazan:{" "}
              {post.author !== null ? post.author?.name : "Referans Hukuk"} |{" "}
              {moment(post.date).format("DD MMMM YYYY")}
            </div>
            <div className="blog-card-image">
              <img
                loading="lazy"
                className="blog-card-cover"
                src={post.coverImage?.url}
                alt={post.title}
              />
            </div>
            <div
              className="blog-card-content"
              dangerouslySetInnerHTML={{ __html: post.content?.html }}
            ></div>
          </div>
        </div>
      ) : (
        <BlockLoading />
      )}
    </>
  );
};

export default BlogDetails;
