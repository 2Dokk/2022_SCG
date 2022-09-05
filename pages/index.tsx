import type { NextPage } from "next";
//component
import Header from "../src/components/Header";
import VideoCarousel from "../src/components/VideoCarousel";
import MyOwnAl from "../src/components/DecorateOwnAl";

const App: NextPage = () => {
  return (
    <div className="App">
      <Header />
      <VideoCarousel />
      <MyOwnAl />
    </div>
  );
};

export default App;
