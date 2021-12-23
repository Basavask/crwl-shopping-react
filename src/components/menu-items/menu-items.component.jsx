import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./menu-items.styles.scss";

const MenuItem = ({ title, linkUrl, imageUrl, size, history, match }) => {
  console.log("l", history, match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
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
};

export default withRouter(MenuItem);
