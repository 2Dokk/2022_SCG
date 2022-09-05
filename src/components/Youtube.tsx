import React from "react";
interface Props {
  embedId: string;
}
const Youtube: React.FC<Props> = (props) => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="340"
        src="https://www.youtube.com/embed/_GNQDgsa5GE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
