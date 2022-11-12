import type { NextPage } from "next";
//component
import Header from "../src/components/Header";
import VideoCarousel from "../src/components/VideoCarousel";
import MyOwnAl from "../src/components/DecorateOwnAl";

const App: NextPage = (props) => {
  return (
    <div className="App" style={{ maxWidth: "900px", margin: "auto" }}>
      <Header />
      <VideoCarousel />
      <MyOwnAl />
    </div>
  );
};
export default App;
