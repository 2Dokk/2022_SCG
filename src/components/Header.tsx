import React from "react";
import Image from "next/image";
//Logoimage
import logoImage from "./images/jjuppLogo.png";
const Header: React.FC = () => {
  return (
    <div>
      <header>
        <div style={{ position: "relative", maxWidth: "15%" }}>
          <Image
            src={logoImage}
            alt="jjuppLogo"
            placeholder="blur"
            sizes="(max-width: 20%) 30px"
            layout="responsive"
          />
        </div>
      </header>
      <div id="header-line"></div>
    </div>
  );
};

export default Header;
