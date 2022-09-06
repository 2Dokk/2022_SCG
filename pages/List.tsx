import type { NextPage } from "next";

//components
import Header from "../src/components/Header";
import FoodList from "../src/components/FoodList";
const JJuppList: NextPage = () => {
  return (
    <div>
      <Header />
      <FoodList />
    </div>
  );
};

export default JJuppList;
