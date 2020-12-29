import React, { useState } from "react";
import { Row, Container, Button } from "react-bootstrap";
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
          <FormComponent
            submit={handleFirstSubmit}
            player={playerOne}
            setPlayer={setPlayerOne}
          />
        )}

        {playerTwoSubmit ? (
          <Player player={playerTwoData} reset={handleReset} id={2} />
        ) : (
          <FormComponent
            submit={handleSecondSubmit}
            player={playerTwo}
            setPlayer={setPlayerTwo}
          />
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
