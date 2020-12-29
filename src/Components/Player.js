import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Player = ({ player, reset, id }) => {
  return (
    <Col lg={6} sm={12} key={player.id}>
      <Card className="my-3" style={{ background: "rgba(11, 83, 69, 0.8)" }}>
        <Card.Img
          style={{
            borderRadius: "50%",
            height: "14rem",
            width: "14rem",
            margin: "auto",
            marginTop: "1rem",
          }}
          variant="top"
          src={player.avatar_url}
        />
        <Card.Body style={{ textAlign: "center", color: "white" }}>
          <Card.Title>
            <i className="lni lni-user"></i>
            <span> </span>
            {player.name}
          </Card.Title>
          <Button id={id} variant="primary" onClick={reset}>
            Reset
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Player;
