import React, { useEffect, useState } from "react";
import { getPopularRepos } from "../utils/api";
import Loader from "./Loader";

const PopularRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularRepos("java")
      .then(({ items }) => setRepositories(items))
      .then(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        repositories.map((item) => (
          <div>
            <h1>{item.name}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default PopularRepositories;
