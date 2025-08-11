import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { memo, useCallback } from "react";

const center = { lng: 4.917325471254367, lat: 52.34491172835247 };

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    libraries: ["marker"],
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    // Create a new AdvancedMarkerElement
    new google.maps.marker.AdvancedMarkerElement({
      position: center,
      map,
      title: "Rembrandttoren",
    });
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "400px",
      }}
      center={center}
      zoom={16}
      onLoad={onLoad}
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        mapId: import.meta.env.VITE_GOOGLE_MAP_ID,
      }}
    />
  ) : null;
}

const MemoMap = memo(Map);

export { MemoMap as Map };
