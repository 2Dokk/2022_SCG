import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Youtube from "./Youtube";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      embedId: "_GNQDgsa5GE",
    },
    {
      id: 2,
      embedId: "_GNQDgsa5GE",
    },
    {
      id: 3,
      embedId: "_GNQDgsa5GE",
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
