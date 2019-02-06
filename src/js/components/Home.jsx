import React from "react";
const Home = ({ userData }) => {
  let response = userData.map((user, index) => {
    return (
      <div key={index}>
        <h1>{user.name}</h1>
        <p>{user.id}</p>
        <p>{user.email}</p>
      </div>
    );
  });
  return <div> {response}</div>;
};
export default Home;
