import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Index = () => {
  const [map, setMap] = useState(null);
  const [circle, setCircle] = useState(null);
  const [marker, setMarker] = useState(null);
  const [rad, setRad] = useState(0);

  const handleMapLoaded = ({ map }) => {
    // Save the map instance to state
    setMap(map);

    // Create a new marker and set it to the center of the map
    const newMarker = new window.google.maps.Marker({
      map,
      position: map.getCenter(),
      title: "name",
    });
    setMarker(newMarker);

    // Save the initial circle instance to state
    const initialRadius = 0;
    const newCircle = new window.google.maps.Circle({
      map,
      radius: initialRadius,
      fillColor: "#555",
      strokeColor: "#ffffff",
      strokeOpacity: 0.1,
      strokeWeight: 3,
    });
    newCircle.bindTo("center", newMarker, "position");
    setCircle(newCircle);
  };

  // Function to handle the change event on the input slider
  const handleRadiusChange = (event) => {
    const newRad = event.target.value;
    const convertedRad = newRad * 1609.34;
    setRad(convertedRad);
  };

  React.useEffect(() => {
    if (circle && circle.setRadius) {
      circle.setRadius(rad);
    }
  }, [circle, rad]); // Will re-run whenever 'circle' or 'rad' changes

  return (
    <div>
      <input
        type="range"
        id="customRange1"
        min="0"
        max="100"
        onChange={handleRadiusChange}
        style={{ height: "5dvh" }}
      />
      <div style={{ height: "90dvh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyC1OJnQqB9zO5yJEZflAvpWTRj_VCH11y4",
            language: "en",
          }}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
          defaultZoom={8}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={handleMapLoaded}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Index;
