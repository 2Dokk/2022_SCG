import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
//Icon
import LogoIcon from "../images/jjuppLogo.png";
import DecoIcon from "../images/jjuppDeco.png";
import interviewIcon from "../images/jjuppInterview.png";
import ListIcon from "../images/jjuppList.png";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <header>
        <div
          style={{
            float: "left",
            width: "15%",
            position: "relative",
            maxWidth: "15%",
            cursor: "pointer",
          }}
        >
          <Image
            onClick={() => {
              router.push("/");
            }}
            src={LogoIcon}
            alt="jjuppLogo"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <div
          id="firstIcon"
          className="Icon"
          style={{
            float: "left",
            width: "15%",
            position: "relative",
            maxWidth: "10%",
            cursor: "pointer",
          }}
        >
          <Image
            onClick={() => {
              router.push("/Interview");
            }}
            src={interviewIcon}
            alt="jjuppInterview"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <div
          id="secondIcon"
          className="Icon"
          style={{
            float: "left",
            width: "15%",
            position: "relative",
            maxWidth: "10%",
            cursor: "pointer",
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
          id="thirdIcon"
          className="Icon"
          style={{
            float: "left",
            width: "15%",
            position: "relative",
            maxWidth: "10%",
            cursor: "pointer",
          }}
        >
          <Image
            onClick={() => {
              router.push("/List");
            }}
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
