import React from "react";
import Image from "next/image";
//Icon
import LogoIcon from "./images/jjuppLogo.png";
import DecoIcon from "./images/jjuppDeco.png";
import interviewIcon from "./images/jjuppInterview.png";
import ListIcon from "./images/jjuppList.png";
const Header: React.FC = () => {
  return (
    <div>
      <header>
        <div
          style={{
            float: "left",
            width: "15%",
            position: "relative",
            maxWidth: "15%",
          }}
        >
          <Image
            src={LogoIcon}
            alt="jjuppLogo"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <div
          className="Icon"
          style={{
            float: "left",
            width: "15%",
            position: "relative",
            maxWidth: "15%",
          }}
        >
          <Image
            src={interviewIcon}
            alt="jjuppInterview"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <div
          className="Icon"
          style={{
            float: "left",
            width: "15%",
            position: "relative",
            maxWidth: "15%",
          }}
        >
          <Image
            src={DecoIcon}
            alt="jjuppDeco"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <div
          className="Icon"
          style={{
            float: "left",
            width: "15%",
            position: "relative",
            maxWidth: "15%",
          }}
        >
          <Image
            src={ListIcon}
            alt="jjuppList"
            placeholder="blur"
            layout="responsive"
          />
        </div>
      </header>
      <div style={{ clear: "both" }} id="header-upline"></div>
      <div style={{ clear: "both" }} id="header-line"></div>
    </div>
  );
};

export default Header;
