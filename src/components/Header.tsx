import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//Icon
import LogoIcon from "../../public/jjuppLogo.png";
import DecoIcon from "../../public/jjuppDeco.png";
import interviewIcon from "../../public/jjuppInterview.png";
import ListIcon from "../../public/jjuppList.png";

const Header: React.FC = () => {
  return (
    <div>
      <div className="header">
        <Link href={"/"}>
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
              src={LogoIcon}
              alt="jjuppLogo"
              placeholder="blur"
              layout="responsive"
            />
          </div>
        </Link>
        <Link href={"/"}>
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
              src={interviewIcon}
              alt="jjuppInterview"
              placeholder="blur"
              layout="responsive"
            />
          </div>
        </Link>
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
        <Link href={"/List"}>
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
              src={ListIcon}
              alt="jjuppList"
              placeholder="blur"
              layout="responsive"
            />
          </div>
        </Link>
      </div>
      <div style={{ clear: "both" }} id="header-upline"></div>
      <div style={{ clear: "both" }} id="header-line"></div>
    </div>
  );
};

export default Header;
