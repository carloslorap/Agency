import React from "react";
import "../../style/blog.css";
import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import casestudy from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: " To know about work. Watch some video f...",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Articles",
    desc: " To know about work. about work know Watch some video f...",
    linkUrl: "#",
  },
  {
    imgUrl: casestudy,
    title: "Case Study",
    desc: " To know about work. Watch some video f...",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog_top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's have a look from our
            <span className="highlight"> recent blog</span>
          </h2>
        </div>

        <div>
          <div className="blog_wrapper">
            {blogData.map((item, index) => (
              <div className="blog_item" key={index}>
                <h3>{item.title}</h3>
                <div className="blog_img">
                  <img src={item.imgUrl} alt="jio" />
                </div>
                <p className="description blog_desc">
                  {item.desc}
                </p>
                <div>
                  <a href={item.linkUrl} className="learn_more">
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
