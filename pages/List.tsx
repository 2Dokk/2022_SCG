import type { NextPage } from "next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//components
import Header from "../src/components/Header";

const JJuppList: NextPage = () => {
  return (
    <div>
      <Header />
      <Tabs>
        <TabList>
          <Tab>
            <div>한</div>
            <div>식</div>
          </Tab>
          <Tab>
            <div>중</div>
            <div>식</div>
          </Tab>
          <Tab>
            <div>일</div>
            <div>식</div>
          </Tab>
          <Tab>
            <div>양</div>
            <div>식</div>
          </Tab>
          <Tab id="cafe">
            <div>카</div>
            <div>페</div>
            <div>·</div>
            <div>디</div>
            <div>저</div>
            <div>트</div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content"></div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content"></div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content"></div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content"></div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content"></div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JJuppList;
