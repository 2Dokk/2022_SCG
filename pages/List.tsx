import type { GetStaticProps, NextPage } from "next";
import Axios from "axios";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

//components
import Header from "../src/components/Header";
import FoodList from "../src/components/FoodList";

const JJuppList: NextPage = (props) => {
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default JJuppList;

// export const getStaticProps: GetStaticProps = async () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   let placeInfo: string[] = [];
//   const apiKey = process.env.NEXT_PUBLIC_APIKEY;
//   const korPhoneNum: string[] = [
//     "027010890",
//     "027171922",
//     "050713887787",
//     "027110431",
//     "027035297",
//     "027126483",
//     "027015996",
//   ];
//   let i = 0;
//   // for (; korPhoneNum[i]; ) {
//   //   const x = korPhoneNum[i];
//   //   let placeId;
//   //   await Axios.get(
//   //     `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B+82${x}&inputtype=phonenumber&key=${apiKey}`
//   //   ).then((res: any) => {
//   //     placeId = res.data.candidates[0]?.place_id;
//   //     Axios.get(
//   //       `https://maps.googleapis.com/maps/api/place/details/json?fields=name&place_id=${placeId}&key=${apiKey}`
//   //     ).then((res: any) => {
//   //       placeInfo.push(res.data.result.name);
//   //       console.log(res.data.result.name);
//   //     });
//   //   });
//   //   i++;
//   // }
//   console.log(placeInfo.length);
//   return {
//     props: {
//       placeInfo,
//       fallback: false,
//     },
//   };
// };
