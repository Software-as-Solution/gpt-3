import "./Article.css";
import React from "react";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3-blog-container-article">
      <div className="gpt3-blog-container-article-img">
        <img src={imgUrl} alt="blog" className="gpt3-img" />
      </div>
      <div className="gpt3-blog-container-article-contant">
        <div>
          <p className="gpt3-text">{date}</p>
          <h3 className="gpt3-title">{title}</h3>
        </div>
        <p className="gpt3-button">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
