import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const InterviewT: React.FC = () => {
  return (
    <div>
      <div id="interviewBox">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav className="flex-column">
                <Nav.Link eventKey="first">
                  <div>A</div>
                  <div>B</div>
                  <div>O</div>
                  <div>U</div>
                  <div>T</div>
                </Nav.Link>
                <Nav.Link eventKey="second">
                  <div>인</div>
                  <div>터</div>
                  <div>뷰</div>
                </Nav.Link>
                <Nav.Link eventKey="third">
                  <div>메</div>
                  <div>모</div>
                  <div>장</div>
                </Nav.Link>
              </Nav>
            </Col>
            <Col id="tabContent" sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">First</Tab.Pane>
                <Tab.Pane eventKey="second">Second</Tab.Pane>
                <Tab.Pane eventKey="third">Third</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default InterviewT;
