import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = (CartItem, buyNow, removeItem) => {
  let amount = 0;

  CartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {CartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} alt="###"></img>
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>price:-{item.productPrice}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* if every thing is empty */}
      {CartItem.length >= 1 ? (
        <Card className="text-Center mt-3">
          <CardHeader>GrandTotal</CardHeader>
          <CardBody>
            Your amount for {CartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Pay here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart is empty</h1>
      )}
    </Container>
  );
};

export default Cart;
