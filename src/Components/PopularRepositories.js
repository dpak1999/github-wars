import React, { useState } from "react";
import Loader from "./Loader";
import { Container } from "react-bootstrap";
import TopicNavigation from "./TopicNavigation";
import PopularRepo from "./PopularRepo";

const PopularRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <h1 className="App">Explore</h1>
      <TopicNavigation load={setLoading} repo={setRepositories} />
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <PopularRepo repo={repositories} />
        </Container>
      )}
    </>
  );
};

export default PopularRepositories;
