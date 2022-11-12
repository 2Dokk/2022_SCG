import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Youtube from "./Youtube";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      embedId: "a8E90NLbJlw",
    },
    {
      id: 2,
      embedId: "_HbEZZuEaaU",
    },
    {
      id: 3,
      embedId: "a8E90NLbJlw",
    },
  ];

  return (
    <div id="VideoC">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <Youtube embedId={videoObj.embedId} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
