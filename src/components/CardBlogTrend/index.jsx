import React from "react";

function CardBlogTrend({ count, title, description }) {
  return (
    <div className="blog__card-trend">
      <div className="blog__card-trend--count">{count}</div>
      <div className="blog__card-trend--content">
        <div className="blog__title-card">{title}</div>
        <div className="blog__description">{description}</div>
      </div>
    </div>
  );
}

export default CardBlogTrend;
