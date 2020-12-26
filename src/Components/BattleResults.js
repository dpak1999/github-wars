import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getUserScore } from "../utils/api";

const BattleResults = ({
  location: {
    players: { firstPlayer, secondPlayer },
  },
}) => {
  const [playerOneScore, setPlayerOneScore] = useState(null);
  const [playerTwoScore, setPlayerTwoScore] = useState(null);

  useEffect(() => {
    getUserScore(firstPlayer.login).then((res) => setPlayerOneScore(res));
    getUserScore(secondPlayer.login).then((res) => setPlayerTwoScore(res));
  });

  return (
    <Container className="my-3">
      <Row>
        <Col lg={6} sm={12}>
          {playerOneScore > playerTwoScore ? (
            <h1 className="App">Winner🥳</h1>
          ) : playerOneScore === playerTwoScore ? (
            <h1 className="App">Tie🙂</h1>
          ) : (
            <h1 className="App">Loser🙁</h1>
          )}
          <h1 className="App">Score: {playerOneScore}</h1>
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
              src={firstPlayer.avatar_url}
              variant="top"
            />
            <Card.Body style={{ textAlign: "center", color: "white" }}>
              <Card.Title>{firstPlayer.name}</Card.Title>
              <p>@{firstPlayer.login}</p>
              <p>{firstPlayer.location}</p>
              <p>{firstPlayer.followers} followers</p>
              <p>{firstPlayer.following} following</p>
              <p>{firstPlayer.public_repos} public repositories</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} sm={12}>
          {playerTwoScore > playerOneScore ? (
            <h1 className="App">Winner🥳</h1>
          ) : playerOneScore === playerTwoScore ? (
            <h1 className="App">Tie🙂</h1>
          ) : (
            <h1 className="App">Loser🙁</h1>
          )}
          <h1 className="App">Score: {playerTwoScore}</h1>
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
              src={secondPlayer.avatar_url}
              variant="top"
            />
            <Card.Body style={{ textAlign: "center", color: "white" }}>
              <Card.Title>{secondPlayer.name}</Card.Title>
              <p>@{secondPlayer.login}</p>
              <p>{secondPlayer.location}</p>
              <p>{secondPlayer.followers} followers</p>
              <p>{secondPlayer.following} following</p>
              <p>{secondPlayer.public_repos} public repositories</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BattleResults;
