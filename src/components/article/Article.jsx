import React from "react";
import "./article.css";

const Article = ({ imgURL, article_time, article_title, article_link }) => {
  return (
    <div className="gpt3__article__container">
      <div className="article__img__container">
        <img className="article__img" src={imgURL} alt="img of the blog post" />
      </div>
      <div className="article__content__container">
        <div className="title_time_container">
          <h3>{article_title}</h3>
          <p>{article_time}</p>
        </div>
        <p>Read more</p>
      </div>
    </div>
  );
};
export default Article;
