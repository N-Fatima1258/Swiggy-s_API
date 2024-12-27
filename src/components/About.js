import User from "./User";
import React, { useEffect } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const About = () => {
  const{loggedInUser} = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <h2>{loggedInUser}</h2>
      <p>This is the About Page</p>
      <User />
    </div>
  );
};

export default About;
