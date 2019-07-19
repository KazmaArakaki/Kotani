import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import constants from "../../utils/constants";

const MapComponent = ({ style }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div style={style}>
      <iframe style={{
            width: "100%",
            height: `${windowWidth}px`,
            maxHeight: "425px",
            border: "none",
          }}
          width={windowWidth}
          height={windowWidth < 425 ? windowWidth : 425}
          frameBorder="0"
          src={[
            "https://www.google.com/maps/embed/v1/place",
            "?q=日本、大阪府堺市東区大美野１５８−２３+小谷はり灸所",
            "&key=" + constants.googleMapsApiKey,
          ].join("")}
          allowFullScreen={true}>
      </iframe>
    </div>
  );
};

MapComponent.defaultProps = {
  style: {},
};

export default MapComponent;

