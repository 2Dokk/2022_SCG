import type { NextPage } from "next";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";
import CAFE from "../public/CAFE.jpeg";
import CHI from "../public/CHI.jpeg";
import JAP from "../public/JAP.jpeg";
import KOR from "../public/KOR.jpeg";
import WEST from "../public/WEST.png";

//components
import Header from "../src/components/Header";

const JJuppList: NextPage = (props) => {
  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <Header />
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Nav id="foodList" variant="pills" defaultActiveKey="1" fill>
            <Nav.Link eventKey="1">한식</Nav.Link>
            <Nav.Link eventKey="2">중식</Nav.Link>
            <Nav.Link eventKey="3">일식</Nav.Link>

            <Nav.Link eventKey="4">양식</Nav.Link>

            <Nav.Link eventKey="5">디저트</Nav.Link>
          </Nav>

          <Tab.Content id="foodContent">
            <Tab.Pane eventKey="1">
              <Image
                src={KOR}
                alt="jjuppInterview"
                placeholder="blur"
                layout="responsive"
              />
              <ul>
                <Link href="/Food/ChIJU1LQ_JWYfDURK6sdvYiezUg">
                  <li>거북이의 주방</li>
                </Link>
                <Link href="/Food/ChIJ6eNmDqOYfDURNrQ13kwsybg">
                  <li>을밀대</li>
                </Link>
                <Link href="/Food/ChIJMYp2Gn2ZfDURNM2j3WAOwSM">
                  <li>덮당</li>
                </Link>
                <Link href="/Food/ChIJZ8bvekuZfDURGFASAAtRaAE">
                  <li>도꼭지</li>
                </Link>
                <Link href="/Food/ChIJReo-46KYfDURnRwg08VRuhY">
                  <li>미가</li>
                </Link>
                <Link href="/Food/ChIJpx-MkTOZfDURwQn06oQ6SW0">
                  <li>순이네바지락칼국수</li>
                </Link>
                <Link href="/Food/ChIJhR7S2JWYfDURi1pNyGhiALw">
                  <li>쭈꾸미블루스</li>
                </Link>
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <Image
                src={CHI}
                alt="jjuppInterview"
                placeholder="blur"
                layout="responsive"
              />
              <ul>
                <Link href="/Food/ChIJzfMwBZeZfDUR8vnVjxI6ZWA">
                  <li>샨샨</li>
                </Link>
                <Link href="/Food/ChIJBwBXhhiZfDURVzscm0a8Kts">
                  <li>수저가</li>
                </Link>
                <Link href="/Food/ChIJsSxEoaSZfDURzVpooJyI8m4">
                  <li>서강우동짜장</li>
                </Link>
                <Link href="/Food/ChIJQzYwyaKYfDUR1udr2Ns18CU">
                  <li>옛날짜장기계우동</li>
                </Link>
                <Link href="/Food/ChIJWYFi5eCZfDURC-Z4QhZvyYY">
                  <li>정정</li>
                </Link>
                <Link href="/Food/ChIJ8993Ou2ZfDURJvori5tFdmc">
                  <li>짜장상회</li>
                </Link>
                <Link href="/Food/ChIJS4Yw4r2YfDURG30h0r8qHZE">
                  <li>홍원</li>
                </Link>
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="3">
              <Image
                src={JAP}
                alt="jjuppInterview"
                placeholder="blur"
                layout="responsive"
              />
              <ul>
                <Link href="/Food/ChIJIX9gJJWYfDURhlLe3EFVXIM">
                  <li>기꾸스시</li>
                </Link>
                <Link href="/Food/ChIJPUAhxjWZfDUR2VPOnvM_N0M">
                  <li>미도인</li>
                </Link>
                <Link href="/Food/ChIJuxGEQ7yYfDURbKV_spsLrkU">
                  <li>용싸키친</li>
                </Link>
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="4">
              <Image
                src={WEST}
                alt="jjuppInterview"
                placeholder="blur"
                layout="responsive"
              />
              <ul>
                <Link href="/Food/ChIJDZWOFLuYfDUR-Lt0vLwlsuM">
                  <li>마포리</li>
                </Link>
                <Link href="/Food/ChIJy-sxqJaYfDURw39LbsR8oIo">
                  <li>소담식당</li>
                </Link>
                <Link href="/Food/ChIJN8A2gjGZfDURfIgQMgnga5Y">
                  <li>정각</li>
                </Link>
                <Link href="/Food/ChIJqXMziL-YfDUR7a-eme2r7M0">
                  <li>조용한 식탁</li>
                </Link>
                <Link href="/Food/ChIJO18N5LKZfDURxsODWgRGTeE">
                  <li>지알로 파스타 바</li>
                </Link>
                <Link href="/Food/ChIJT2Uf7suZfDURefxnN_QFXF4">
                  <li>하이포테이토</li>
                </Link>
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="5">
              <Image
                src={CAFE}
                alt="jjuppInterview"
                placeholder="blur"
                layout="responsive"
              />
              <ul>
                <Link href="/Food/ChIJg9fk9pOYfDURAJtpdLi8eiI">
                  <li>고르드</li>
                </Link>
                <Link href="/Food/ChIJ7xj89LuYfDURa8iiE5FmxEU">
                  <li>비로소커피</li>
                </Link>
                <Link href="/Food/ChIJU1I1VbmYfDURqFR2x7ZVYfQ">
                  <li>빅베어브레드</li>
                </Link>
                <Link href="/Food/ChIJqVONSpSZfDURW5ObXG7tGsw">
                  <li>마침내카페</li>
                </Link>
                <Link href="/Food/ChIJqcJncDeZfDUR7bV6Y49lVwU">
                  <li>달쏘</li>
                </Link>
              </ul>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default JJuppList;
