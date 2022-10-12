import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Axios from "axios";

const FoodList: React.FC = () => {
  let apiKey = process.env.NEXT_PUBLIC_APIKEY;
  const axios = require("axios");
  let [placeInfo, setPlaceInfo] = useState<string[]>([]);
  useEffect(() => {
    Axios.get(
      `/api/findplacefromtext/json?input=%2B+82027110431&inputtype=phonenumber&key=${apiKey}`
    )
      .then((res: any) => {
        console.log(res.data.candidates[0].place_id);
        setPlaceInfo(res.data.candidates[0].place_id);
      })
      .catch(() => {});
  }, [apiKey, axios]);
  useEffect(() => {
    Axios.get(
      `/api/details/json?fields=name%2Crating%2Cformatted_phone_number&place_id=${placeInfo}&key=${apiKey}`
    )
      .then((res: any) => {
        console.log(res.data);
        console.log("adfasdf=" + placeInfo);
      })
      .catch(() => {});
  }, [apiKey, axios, placeInfo]);
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
