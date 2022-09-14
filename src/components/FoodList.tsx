import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

const FoodList: React.FC = () => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Nav id="foodList" variant="pills" defaultActiveKey="1" fill>
          <Nav.Link eventKey="1">한식</Nav.Link>

          <Nav.Link eventKey="2">중식</Nav.Link>

          <Nav.Link eventKey="3">일식</Nav.Link>

          <Nav.Link eventKey="4">양식</Nav.Link>

          <Nav.Link eventKey="5">디저트</Nav.Link>
        </Nav>

        <Tab.Content id="foodContent">
          <Tab.Pane eventKey="1">한식</Tab.Pane>
          <Tab.Pane eventKey="2">중식</Tab.Pane>
          <Tab.Pane eventKey="3">일식</Tab.Pane>
          <Tab.Pane eventKey="4">양식</Tab.Pane>
          <Tab.Pane eventKey="5">디저트</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default FoodList;
