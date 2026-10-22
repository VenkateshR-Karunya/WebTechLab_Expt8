import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="card">
      <h2>Welcome to The Green Thumb Journal</h2>
      <p className="center">
        Tips, tools and tiny experiments for happy gardens. Learn how to grow
        roses, tulips, sunflowers and lavender at home.
      </p>
      <p className="center">
        <Link className="button" to="/register">
          Join the Garden Club
        </Link>
      </p>
    </div>
  );
}

export default Home;
