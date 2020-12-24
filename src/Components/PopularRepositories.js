import React, { useEffect, useState } from "react";
import { getPopularRepos } from "../utils/api";
import Loader from "./Loader";
import { Card, Col, Container, Row } from "react-bootstrap";

const PopularRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState("All");

  const topics = ["All", "Javascript", "React", "Vue", "Python", "CSS"];

  const handleClicked = (e) => {
    // console.log(e.target.textContent);
    setClicked(e.target.textContent);
    fetchData(e.target.textContent);
  };

  const fetchData = (text) => {
    setLoading(true);
    getPopularRepos(text)
      .then(({ items }) => setRepositories(items))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(clicked);
  }, [clicked]);
  return (
    <>
      <h1 className="App">Explore</h1>
      <ul className="repo-navigation">
        {topics.map((item, index) => {
          return (
            <li
              title={item}
              className={clicked === item ? "clicked" : ""}
              key={index}
              onClick={handleClicked}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            {repositories.map((item) => (
              <Col lg={4} sm={10} key={item.id}>
                <Card
                  className="my-3"
                  style={{ background: "rgba(11, 83, 69, 0.8)" }}
                >
                  <Card.Img
                    style={{
                      borderRadius: "50%",
                      height: "14rem",
                      width: "14rem",
                      margin: "auto",
                      marginTop: "1rem",
                    }}
                    fluid
                    variant="top"
                    src={item.owner.avatar_url}
                  />
                  <Card.Body style={{ textAlign: "center", color: "white" }}>
                    <Card.Title>{item.name}</Card.Title>
                    <p>
                      <i className="lni lni-user"></i>
                      <span> </span>
                      {item.full_name}
                    </p>
                    <p>
                      <i className="lni lni-star-filled"></i>
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
