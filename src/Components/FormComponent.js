import React from "react";
import { Col, Form, Button } from "react-bootstrap";

const FormComponent = (props) => {
  return (
    <Col md={6} sm={12}>
      <Form onSubmit={props.submit} className="button-battle">
        <Form.Control
          type="text"
          value={props.player}
          onChange={(e) => {
            props.setPlayer(e.target.value);
          }}
          placeholder="Player 1"
        />
        <Button
          type="submit"
          className="my-3"
          disabled={props.player.length > 0 ? false : true}
          variant="outline-primary"
        >
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default FormComponent;
