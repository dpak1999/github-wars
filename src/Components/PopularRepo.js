import React from "react";
import { Row, Card, Col } from "react-bootstrap";

const PopularRepo = (props) => {
  return (
    <Row>
      {props.repo.map((item) => (
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
  );
};

export default PopularRepo;
