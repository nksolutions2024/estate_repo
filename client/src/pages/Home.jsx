import React from 'react'

// export default function Home() {
//   return (
//     <div>Home1</div>
//   )
// }


// "use client"

import { useState } from "react";
import DeckGL from "@deck.gl/react";
import maplibregl from "maplibre-gl";
import StaticMap from 'react-map-gl'; // Ensure this matches the library you are using
import "mapbox-gl/dist/mapbox-gl.css";


const OlaMaps = () => {
  const [viewState, setViewState] = useState({
    longitude: 76.3433,
    latitude: 19.8762,
    zoom: 10,
  });

  return (
    <div className="flex relative ">
      <DeckGL
        style={{ width: "50vw", height: "80vh", overflow: "hidden", position:"absolute", right:"0"}}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={true}
        layers={[]}
      >
        <StaticMap
          mapLib={maplibregl}
          mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
          transformRequest={(url, resourceType) => {
            if (url.includes("?")) {
              url = url + "&api_key=OCT8Oo19bcr3JkkGFuUZLDe4VW4wOXM1blmHWFSa";
            } else {
              url = url + "?api_key=OCT8Oo19bcr3JkkGFuUZLDe4VW4wOXM1blmHWFSa";
            }
            return { url, resourceType };
          }}
        />
      </DeckGL>
    </div>
  );
};


// import OlaMaps from "./component/OlaMaps";

export default function Home() {
  return (
    <div>
      <OlaMaps />
    </div>
  );
}
