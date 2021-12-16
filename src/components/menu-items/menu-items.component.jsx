import React from "react";
import "./menu-items.styles.scss";

export const MenuItem = ({ title, linkUrl, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="back-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{linkUrl}</span>
    </div>
  </div>
);
