import React from "react";
const Home = props => {
  console.log("home props", props);
  return (
    <div>
      {" "}
      This is Home <div>{props.children}</div>
    </div>
  );
};
export default Home;
