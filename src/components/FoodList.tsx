import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

const FoodList: React.FC = () => {
  return (
    <div>
      <div id="foodList">
        <Nav variant="pills" defaultActiveKey="1" fill>
          <Nav.Link eventKey="1">한식</Nav.Link>

          <Nav.Link eventKey="2">중식</Nav.Link>

          <Nav.Link eventKey="3">일식</Nav.Link>

          <Nav.Link eventKey="4">양식</Nav.Link>

          <Nav.Link eventKey="5">디저트</Nav.Link>
        </Nav>
      </div>

      <Tab.Content id="foodContent">
        <Tab.Pane eventKey="1">
          asdfsfaasdfsadfadsfsadfsadfasdgsadgasdgwasv awege
        </Tab.Pane>
      </Tab.Content>
    </div>
  );
};

export default FoodList;
