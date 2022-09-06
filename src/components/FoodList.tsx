import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
//Images
import Typography from "../images/jjuppDeco.png";

const FoodList: React.FC = () => {
  return (
    <div>
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
          <div className="panel-content">
            <Image
              src={Typography}
              alt="Typo"
              placeholder="blur"
              layout="responsive"
            />
          </div>
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

export default FoodList;
