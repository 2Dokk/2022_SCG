import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { propTypes } from "react-bootstrap/esm/Image";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
interface centerProps {
  lat: number;
  lng: number;
}

const MyComponent = ({ props }: { props: centerProps }) => {
  const apiKey = process.env.NEXT_PUBLIC_APIKEY!;
  const center = {
    lat: Number(props.lat),
    lng: Number(props.lng),
  };
  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  console.log(props.lat, props.lng);
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker onLoad={onLoad} position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MyComponent);
