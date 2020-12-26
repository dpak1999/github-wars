import React, { useEffect, useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUserData } from "../utils/api";

const Battle = () => {
  getUserData("dpak1999").then((res) => console.log(res));
  const [playerOneSubmit, setPlayerOneSubmit] = useState(false);
  const [playerTwoSubmit, setPlayerTwoSubmit] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const handleFirstSubmit = (e) => {
    e.preventDefault();
    setPlayerOneSubmit(true);
  };

  const handleSecondSubmit = (e) => {
    e.preventDefault();
    setPlayerTwoSubmit(true);
  };

  useEffect(() => {
    console.log(playerOne);
  }, []);

  return (
    <Container>
      <h1 className="App">Battle</h1>
      <Row>
        {playerOneSubmit ? (
          <h1>submitted 1</h1>
        ) : (
          <Col md={6} sm={12}>
            <Form onSubmit={handleFirstSubmit} className="button-battle">
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
            </Form>
          </Col>
        )}

        {playerTwoSubmit ? (
          <h1>submitted 2</h1>
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
      <div>
        {playerOneSubmit && playerTwoSubmit ? (
          <Link to="/results">
            <Button>Battle</Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default Battle;
