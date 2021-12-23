import React from "react";
import { Link } from "react-router-dom";
import { Directory } from "../../components/directory/directory.component";
import "./homepage.styles.scss";

export const Homepage = () => (
  <div className="homepage">
    <Link to="/shop/hats" >GOTO HATS</Link>
    <Link to="/praveen" >GOTO Praveen Page</Link>
    <Directory />
  </div>
);
