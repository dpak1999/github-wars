import React, { useEffect, useState } from "react";
import { getPopularRepos } from "../utils/api";
import Loader from "./Loader";
import { Card, Col, Container, Row } from "react-bootstrap";

const PopularRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularRepos("c")
      .then(({ items }) => setRepositories(items))
      .then(() => setLoading(false));
  }, []);
  return (
    <>
      <h1>Explore</h1>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            {repositories.map((item) => (
              <Col lg={4} sm={10}>
                <Card className="my-3" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.owner.avatar_url} />
                  <Card.Body>
                    <h1>{item.name}</h1>
                    <p>
                      <i class="lni lni-user"></i>
                      {item.full_name}
                    </p>
                    <p>
                      <i class="lni lni-star-filled"></i>
                      {item.stargazers_count}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default PopularRepositories;
