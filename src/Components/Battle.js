import React, { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserData } from "../utils/api";
import FormComponent from "./FormComponent";
import Player from "./Player";

const Battle = () => {
  const [playerOneSubmit, setPlayerOneSubmit] = useState(false);
  const [playerTwoSubmit, setPlayerTwoSubmit] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerOneData, setPlayerOneData] = useState({});
  const [playerTwoData, setPlayerTwoData] = useState({});

  const handleFirstSubmit = (e) => {
    e.preventDefault();
    setPlayerOneSubmit(true);
    getUserData(playerOne).then((res) => setPlayerOneData(res));
  };

  const handleSecondSubmit = (e) => {
    e.preventDefault();
    setPlayerTwoSubmit(true);
    getUserData(playerTwo).then((res) => setPlayerTwoData(res));
  };

  const handleReset = (e) => {
    if (e.target.id == 1) {
      setPlayerOneSubmit(false);
      setPlayerOne("");
    } else {
      setPlayerTwoSubmit(false);
      setPlayerTwo("");
    }
  };

  return (
    <Container>
      <h1 className="App">Battle</h1>
      <Row>
        {playerOneSubmit ? (
          <Player player={playerOneData} reset={handleReset} id={1} />
        ) : (
          <Col md={6} sm={12}>
            <FormComponent
              onSubmit={handleFirstSubmit}
              className="button-battle"
            >
              <Form.Control
                type="text"
                value={playerOne}
                onChange={(e) => {
                  setPlayerOne(e.target.value);
                }}
                placeholder="Player 1"
              />
              <Button
                type="submit"
                className="my-3"
                disabled={playerOne.length > 0 ? false : true}
                variant="outline-primary"
              >
                Submit
              </Button>
            </FormComponent>
          </Col>
        )}

        {playerTwoSubmit ? (
          <Player player={playerTwoData} reset={handleReset} id={2} />
        ) : (
          <Col md={6} sm={12}>
            <Form onSubmit={handleSecondSubmit} className="button-battle">
              <Form.Control
                type="text"
                value={playerTwo}
                onChange={(e) => {
                  setPlayerTwo(e.target.value);
                }}
                placeholder="Player 2"
              />
              <Button
                type="submit"
                className="my-3"
                disabled={playerTwo.length > 0 ? false : true}
                variant="outline-primary"
              >
                Submit
              </Button>
            </Form>
          </Col>
        )}
      </Row>
      <div className="button-battle">
        {playerOneSubmit && playerTwoSubmit && (
          <Link
            to={{
              pathname: "/results",
              players: {
                firstPlayer: playerOneData,
                secondPlayer: playerTwoData,
              },
            }}
          >
            <Button>Battle</Button>
          </Link>
        )}
      </div>
    </Container>
  );
};

export default Battle;
