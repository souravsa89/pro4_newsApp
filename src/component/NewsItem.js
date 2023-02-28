import React from "react";
import newsitem from "./NewsItem.module.css";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date } = props;
  return (
    <div className={newsitem.news}>
      <div className={newsitem.news_div}>
        <img
          className={newsitem.news_img}
          src={
            !imgUrl
              ? "https://gray-wbtv-prod.cdn.arcpublishing.com/resizer/C_wM_2cZ20jt1vX9juppxhBNx3k=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/JHK5HFGBABAHBE2L4K7HHYUCPE.jpg"
              : imgUrl
          }
          alt="..."
        />
        <div className={newsitem.news_heading}>
          <h5 className={newsitem.news_title}>{title}</h5>
          <span className={newsitem.news_author}>
            By {!author ? "Unknown" : author}
          </span>
          <p className={newsitem.date}>
            <small>{new Date(date).toGMTString()}</small>
          </p>
          <p className={newsitem.news_des}>{description}</p>

          <a href={newsUrl} className={newsitem.news_btn} >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
