/* eslint-disable @next/next/no-img-element */
import Header from "../../src/components/Header";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MyComponents from "../../src/components/Map";

interface FoodInfo {
  result: any;
  Info: string;
}
interface RestInfo {
  foodInfo: FoodInfo;
}
interface Params extends ParsedUrlQuery {
  RestID: string;
}
interface centerProps {
  lat: number;
  lng: number;
}
const Rest: NextPage<RestInfo> = (foodInfo) => {
  console.log(foodInfo.foodInfo?.result);
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;
  const img = `/api/photo?maxwidth=400&photo_reference=${foodInfo.foodInfo?.result.photos[0].photo_reference}&key=${apiKey}`;
  const props: centerProps = {
    lat: foodInfo.foodInfo?.result.geometry.location.lat,
    lng: foodInfo.foodInfo?.result.geometry.location.lng,
  };
  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <Header />
      <div style={{ margin: "30px" }}>
        <img src={img} alt="2" />
        <MyComponents props={props} />
        <Link href="/List">
          <div>{"<-"}뒤로가기</div>
        </Link>
        <div>{foodInfo.foodInfo?.result?.name}</div>
        <div>주소: {foodInfo.foodInfo?.result?.formatted_address}</div>
        <div>평점: {foodInfo.foodInfo?.result.rating}</div>
      </div>
    </div>
  );
};
export default Rest;

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = [
    "ChIJU1LQ_JWYfDURK6sdvYiezUg",
    "ChIJ6eNmDqOYfDURNrQ13kwsybg",
    "ChIJMYp2Gn2ZfDURNM2j3WAOwSM",
    "ChIJZ8bvekuZfDURGFASAAtRaAE",
    "ChIJReo-46KYfDURnRwg08VRuhY",
    "ChIJpx-MkTOZfDURwQn06oQ6SW0",
    "ChIJhR7S2JWYfDURi1pNyGhiALw",
    //여기까지 한식
    "ChIJzfMwBZeZfDUR8vnVjxI6ZWA",
    "ChIJBwBXhhiZfDURVzscm0a8Kts",
    "ChIJsSxEoaSZfDURzVpooJyI8m4",
    "ChIJQzYwyaKYfDUR1udr2Ns18CU",
    "ChIJWYFi5eCZfDURC-Z4QhZvyYY",
    "ChIJ8993Ou2ZfDURJvori5tFdmc",
    "ChIJS4Yw4r2YfDURG30h0r8qHZE",
    //여기까지 중식
    "ChIJIX9gJJWYfDURhlLe3EFVXIM",
    "ChIJPUAhxjWZfDUR2VPOnvM_N0M",
    "ChIJuxGEQ7yYfDURbKV_spsLrkU",
    //여기까지 일식
    "ChIJDZWOFLuYfDUR-Lt0vLwlsuM",
    "ChIJy-sxqJaYfDURw39LbsR8oIo",
    "ChIJN8A2gjGZfDURfIgQMgnga5Y",
    "ChIJqXMziL-YfDUR7a-eme2r7M0",
    "ChIJO18N5LKZfDURxsODWgRGTeE",
    "ChIJT2Uf7suZfDURefxnN_QFXF4",
    //여기까지 양식
    "ChIJg9fk9pOYfDURAJtpdLi8eiI",
    "ChIJ7xj89LuYfDURa8iiE5FmxEU",
    "ChIJU1I1VbmYfDURqFR2x7ZVYfQ",
    "ChIJqVONSpSZfDURW5ObXG7tGsw",
    "ChIJqcJncDeZfDUR7bV6Y49lVwU",
    //여기까지 디저트
  ];

  return {
    paths: arr.map((ID) => {
      return {
        params: {
          RestID: ID.toString(),
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<RestInfo, Params> = async (
  context
) => {
  const { RestID } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${RestID}&fields=name%2Cformatted_address%2Cphotos%2Copening_hours%2Cgeometry%2Cadr_address%2Crating%2Cformatted_phone_number&key=${apiKey}&language=ko`
  );
  const foodInfo = (await res.json()) as FoodInfo;

  return {
    props: {
      foodInfo,
    },
  };
};
