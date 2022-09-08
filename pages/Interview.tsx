import { NextPage } from "next";
//components
import Header from "../src/components/Header";
import InterviewT from "../src/components/InterviewTabs";

const Interview: NextPage = () => {
  return (
    <div>
      <Header />
      <InterviewT />
    </div>
  );
};

export default Interview;
