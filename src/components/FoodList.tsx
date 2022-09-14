import { useState, Dispatch, SetStateAction } from "react";

//components
import ListNav from "./ListNav";

export interface listNav {
  item: { menu: string; setMenu: Dispatch<SetStateAction<string>> };
}
const FoodList: React.FC = () => {
  const [navKey, setKey] = useState("KOR");
  const listItem = {
    menu: navKey,
    setMenu: setKey,
  };
  return (
    <div>
      <ListNav item={listItem} />
      <div className="listBody"></div>
    </div>
  );
};

export default FoodList;
