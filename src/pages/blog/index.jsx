import React, { useState, useRef, useEffect } from "react";
import Button from "../../components/Button";
import HeroPage from "../../components/HeroPage";
import Input from "../../components/Input";
import BlogCard from "../../components/BlogCard";
import HeroBackground from "../../assets/images/hero-cover-blog.jpeg";
import BlockLoading from "../../components/BlockLoading";
import { getPostsByFirst, getPostsByAfter } from "../../services/index";
import "../../assets/styles/pages/blog.css";

function Index() {
  const blogCardsEl = useRef();
  const [posts, setPosts] = useState([]);
  const [isGettingPost, setIsGettingPost] = useState(false);
  const [pageInfo, setPageInfo] = useState({ hasNextPage: true });
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    // Fetch data at build time
    async function getData() {
      const data = (await getPostsByFirst()) || [];
      setPosts(data);
    }
    getData();
  }, []);

  useEffect(() => {
    if (pageInfo.hasNextPage) {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    return () => {
      removeScrollEventListener();
    };
  }, [posts]);

  useEffect(() => {
    async function getPostsBySearchKey() {
      const postsByKey = (await getPostsByFirst(9, searchKey)) || [];

      setPosts(postsByKey);
    }

    getPostsBySearchKey();
  }, [searchKey]);

  function handleScroll() {
    if ((!isGettingPost, blogCardsEl.current)) {
      const lastBlogEl = blogCardsEl.current.lastChild;

      if (lastBlogEl && isInViewport(lastBlogEl) && !isGettingPost) {
        getMorePosts();
      }
    }
  }

  function removeScrollEventListener() {
    window.removeEventListener("scroll", handleScroll, {
      passive: true,
    });
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  async function getMorePosts() {
    removeScrollEventListener();
    setIsGettingPost(true);
    const lastPost = posts[posts.length - 1];
    const nextPosts = await getPostsByAfter(lastPost.id);
    setIsGettingPost(false);
    setPosts([...posts, ...nextPosts.posts]);
    setPageInfo(nextPosts.pageInfo);
  }

  const handleChange = (e) => {
    setSearchKey(e.currentTarget.value);
  };

  return (
    <div>
      <HeroPage src={HeroBackground} title={"Blog"} />
      <div className="blog-container">
        <div className="blog-side-bar">
          <div className="detailed-search">
            <h4 className="title-color-red">Anahtar Kelimeye göre Ara</h4>
            <Input placeholder={"Anahtar Kelime"} handleChange={handleChange} />
            <Button button={"Ara"} />
          </div>
        </div>
        <div className="blog-cards" ref={blogCardsEl}>
          {posts.map((post) => (
            <BlogCard
              coverImage={post.coverImage.url}
              coverImageAlt={post.title}
              author={
                post.author !== null ? post.author.name : "Referans Hukuk"
              }
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              key={post.slug}
            />
          ))}
          {isGettingPost && (
            <div className="blog-loading">
              <BlockLoading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
