<h1>My tasks</h1>
<nav className="mainNav">
  <ul>
    <li>
      <Link to="/home" className="navBotton">
        Home
      </Link>
    </li>
    <li>
      <Link to="/home" className="navBotton">
        First
      </Link>
    </li>
    <li>
      <Link to="/home" className="navBotton">
        Second
      </Link>
    </li>
  </ul>
</nav>
------------
import { Container, Row, Col } from 'react-grid-system';
 
<Container>
  <Row>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
  </Row>
</Container>
---------------------

return (
  <>
  <Container>
    <Row className="justify-content-md-center">
      <Col xs lg="2">
        1 of 3
      </Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">
        3 of 3
      </Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">
        3 of 3
      </Col>
    </Row>
  </Container>
  </>
);

