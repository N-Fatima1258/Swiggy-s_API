import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    console.log("useEffect");

    const timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    //this is kind of unmounting phase
    return () => {
      console.log("useEffect Return");
      clearInterval(timer);
    };
  }, []);

  console.log("render");
  return (
    <div className="user-card">
      <h2>Name: liya</h2>
      <h3>Location: delhi</h3>
      <h4>Contact: 987654321</h4>
    </div>
  );
};

export default User;
