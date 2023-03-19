import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="blog__section  section__margin">
      <div className="blog__heading__container">
        <h2 className="gradient__text blog__heading">
          A lot is happening,We are blogging about it.
        </h2>
      </div>
      <div className="blog__articles__container">
        <div className="blog__main__article">
          <Article imgURL={blog01}  article_time ='Sep 26, 2021' article_title= 'GPT-3 and Open  AI is the future. Let us exlore how it is?'  />
        </div>
        <div className="blog__side__article__container">
          <Article imgURL={blog02} article_time ='Sep 26, 2021' article_title= 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/>

          <Article imgURL={blog03} article_time ='Sep 26, 2021' article_title= 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/> 
          <Article imgURL={blog04} article_time ='Sep 26, 2021' article_title= 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgURL={blog05} article_time ='Sep 26, 2021' article_title= 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  );
};
export default Blog;
