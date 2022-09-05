import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const MyOwnAl: React.FC = () => {
  return (
    <div>
      <div id="line"></div>
      <Tabs
        defaultActiveKey="myAl"
        id="uncontrolled-tab-example"
        className="mb-3"
        transition={false}
      >
        <Tab className="tabNames" eventKey="myAl" title="My 알로스"></Tab>
        <Tab className="tabNames" eventKey="closet" title="My 옷장"></Tab>
        <Tab className="tabNames" eventKey="bbom" title="뽐내기"></Tab>
        <Tab className="tabNames" eventKey="cardMap" title="CardMap"></Tab>
      </Tabs>
    </div>
  );
};

export default MyOwnAl;
