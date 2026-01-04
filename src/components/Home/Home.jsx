import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import RecentFood from "../../pages/RecentFood";
import Loading from "../../pages/Loading";
import Helpfull from "../../pages/Helpfull";
import Group from "../../pages/Group";
import Followers from "../../pages/Followers";
import Stats from "../../pages/Stats";
import Featured from "../../pages/Featured";
import Categories from "../../pages/Categories";
import Gallery from "../../pages/Gallery";
import Service from "../../pages/Service";

const API_URL =
  "https://food-lovers-server-3uh2j2e98-salmas-projects-44d38334.vercel.app";

const Home = () => {
  const [recentFoods, setRecentFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/recentFood`)
      .then((res) => res.json())
      .then((data) => {
        setRecentFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load recent foods", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Banner />

      {loading ? (
        <Loading />
      ) : (
        <RecentFood recentFoods={recentFoods} />
      )}

      <Helpfull />
      <Group />
      <Followers />
      <Stats />
      <Featured />
      <Categories />
      <Gallery />
      <Service />
    </div>
  );
};

export default Home;
