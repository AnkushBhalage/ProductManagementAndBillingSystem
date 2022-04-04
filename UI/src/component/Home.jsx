import React from "react";
import { ToastContainer } from "react-bootstrap";
import { Col, Container, Row } from "reactstrap";
import Navbarrr from "./Navbarrr";
import Card from "react-bootstrap/Card";
function Home() {
  return (
    <div className="container">
      <ToastContainer />
      <Container>
        <Row>
          <Col md={3}>
            <Navbarrr />
          </Col>
          <Col md={9}>
            <Card className='text-dark'>
            <Card.Header>
            <h1 className="text-center">
                  Hello {localStorage.getItem("Name")} Welcome 
                </h1>
            </Card.Header>
              <Card.Body>
                <h3 className="text-center">You are on Home Page Of </h3>
                <h3 className="text-center">Product Management System and Billing System</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
