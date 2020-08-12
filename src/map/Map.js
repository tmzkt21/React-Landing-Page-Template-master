import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './map.css'
import "@reach/combobox/styles.css";

const MAP_KEY ='BXIXkgYyr6JzmxB2MlvZc4R4CL6nSqxn4'


const Map = () => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region: 'kr'
    });

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <>
            <GoogleMap>

            </GoogleMap>

        </>
    );
};

export default Map;