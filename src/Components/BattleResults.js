import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getUserScore } from "../utils/api";
import Loader from "./Loader";
import ResultCard from "./ResultCard";

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

  if (playerOneScore == null || playerTwoScore == null) {
    return <Loader />;
  } else {
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
            <ResultCard score={playerOneScore} player={firstPlayer} />
          </Col>

          <Col lg={6} sm={12}>
            {playerTwoScore > playerOneScore ? (
              <h1 className="App">Winner🥳</h1>
            ) : playerOneScore === playerTwoScore ? (
              <h1 className="App">Tie🙂</h1>
            ) : (
              <h1 className="App">Loser🙁</h1>
            )}
            <ResultCard score={playerTwoScore} player={secondPlayer} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default BattleResults;
