import React from "react";
import { Card } from "react-bootstrap";

const ResultCard = (props) => {
  return (
    <>
      <h1 className="App">Score: {props.score}</h1>
      <Card className="my-3" style={{ background: "rgba(11, 83, 69, 0.8)" }}>
        <Card.Img
          style={{
            borderRadius: "50%",
            height: "14rem",
            width: "14rem",
            margin: "auto",
            marginTop: "1rem",
          }}
          src={props.player.avatar_url}
          variant="top"
        />
        <Card.Body style={{ textAlign: "center", color: "white" }}>
          <Card.Title>{props.player.name}</Card.Title>
          <p>@{props.player.login}</p>
          <p>{props.player.location}</p>
          <p>{props.player.followers} followers</p>
          <p>{props.player.following} following</p>
          <p>{props.player.public_repos} public repositories</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default ResultCard;
