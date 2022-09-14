import { SetStateAction, Dispatch } from "react";
import { listNav } from "./FoodList";

const ListNav: React.FC<listNav> = (prop) => {
  const menuAry = ["KOR", "CHI", "JAP", "WEST", "CAFE"];
  const menuObj = {
    KOR: "한식",
    CHI: "중식",
    JAP: "일식",
    WEST: "양식",
    CAFE: "디저트",
  };
  return (
    <div>
      <div className="listTab"></div>
    </div>
  );
};

export default ListNav;
