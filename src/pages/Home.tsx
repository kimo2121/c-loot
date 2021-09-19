import React from "react";
import ExapleBags from "../components/ExampleBags/ExapleBags";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="home-header">C-Loot</h1>
      <div className="home-links">
        <a href="/">Discord</a>
        <a href="/">Twitter</a>
      </div>
      <p>C-Loot is randomized adventurer gear generated and stored on chain.</p>
      <p>
        Stats, images, and other functionality are intentionally omitted for
        others to interpret.
      </p>
      <p>Feel free to use C-Loot in any way you want.</p>
      <h1 className="mint-btn">Mint</h1>
      <ExapleBags />
      <span>
        This website is
        <a href="/"> open-source.</a>
      </span>
    </div>
  );
};

export default Home;
