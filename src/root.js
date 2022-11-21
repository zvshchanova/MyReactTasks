// import "./styles.css";
// import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { Container, Row, Col } from 'react-grid-system';

export function Home() {
  return (
    <>
      {/* <h1>My tasks</h1>
      <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          В разработке
        </Nav.Link>
      </Nav>
    </>
  ); */}

      <Container>
        <Row>
          <Col sm={4}>
            <Nav
              variant="pills"
              defaultActiveKey="/home"
              className="flex-column"
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/task1">Hook useReducer 1</Nav.Link>
              <Nav.Link href="/task2">Hook useReducer 2</Nav.Link>
              <Nav.Link href="/task3">Hook useReducer 3</Nav.Link>
            </Nav>
          </Col>
          <Col sm={8}></Col>
        </Row>
      </Container>
    </>
  );
}
