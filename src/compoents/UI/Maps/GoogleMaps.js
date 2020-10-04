import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const Map = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDkHagogpQs369cvYXb6Dmp0Ozc3URXupI.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `160px`, width:"260px"}} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={18}
        center={props.center}
        onClick={props.onMarkerClick}
    >
        {props.isMarkerShown && <Marker position={props.latLng} />}
    </GoogleMap>
));

export default Map;


//AIzaSyDkHagogpQs369cvYXb6Dmp0Ozc3URXupI
