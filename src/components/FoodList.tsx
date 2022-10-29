import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Axios from "axios";
import { GetStaticProps } from "next";

const FoodList = (props: any) => {
  // let apiKey = process.env.NEXT_PUBLIC_APIKEY;
  // const axios = require("axios");
  // let [placeInfo, setPlaceInfo] = useState<string[]>([]);
  // // useEffect(() => {
  // //   Axios.get(
  // //     `/api/findplacefromtext/json?input=%2B+82027110431&%2B+82027010890&inputtype=phonenumber&key=${apiKey}`
  // //   )
  // //     .then((res: any) => {
  // //       console.log("!");
  // //       console.log(res.data.candidates[0]);
  // //       setPlaceInfo(res.data.candidates[0].place_id);
  // //     })
  // //     .catch(() => {});
  // //   Axios.get(
  // //     `/api/details/json?fields=name%2Curl%2Cphotos%2Copening_hours%2Crating%2Cformatted_phone_number&place_id=${placeInfo}&key=${apiKey}`
  // //   )
  // //     .then((res: any) => {
  // //       console.log(res.data);
  // //     })
  // //     .catch(() => {});
  // // }, [apiKey, axios, placeInfo]);
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

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [placeInfo, setPlaceInfo] = useState({});
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;
  const korPhoneNum: string[] = [
    "027010890",
    "027171922",
    "050713887787",
    "027110431",
    "027035297",
    "027126483",
    "027015996",
    "027013797",
  ];
  let data = 1;
  korPhoneNum.map((x) => {
    let placeId;
    Axios.get(
      `/api/findplacefromtext/json?input=%2B+82${x}&inputtype=phonenumber&key=${apiKey}`
    ).then((res: any) => {
      placeId = res.data.candidates[0].place_id;
      Axios.get(
        `/api/details/json?fields=name&place_id=${placeId}&key=${apiKey}`
      ).then((res: any) => {
        setPlaceInfo(res.data);
      });
    });
  });
  return {
    props: {
      placeInfo,
      data,
    },
  };
};
