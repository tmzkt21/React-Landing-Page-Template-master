import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol } from 'mdbreact';
import './map.css'
import "@reach/combobox/styles.css";
import {Button, Card, CardActions} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {makeStyles} from "@material-ui/styles";

const MAP_KEY='AIzaSyAdb4BpT5FdcmwNVkmh88DHC5n4SaWewRA';

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "750px",
};
const options = {
  // disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 36.8728622,
  lng: 128.0718825
};
const useStyles = makeStyles(() => ({
    root: {
        height: '100%'
    },
    content: {
        padding: 0
    },
    image: {
        height: 48,
        width: 48
    },
    actions: {
        justifyContent: 'flex-end'
    }
}));
export const Map = () =>{
    const classes = useStyles();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: MAP_KEY,
    libraries,
    region:'kr'
  });
  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});
  const [ searchLocation, setSearchLocation] = useState({})
  const [markers, setMarkers] = useState([]);
  const [selectedAddr, setSelectedAddr]= useState("")
  const [selectedPc,setSelectedPc] = useState("")
  const [infoShow, setInfoShow]= useState(false)

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      },
    ]);
  }, []);

  const geocode = async (marker) => {
    Geocode.setApiKey(MAP_KEY);
    Geocode.setLanguage('ko')
    Geocode.fromLatLng(marker.lat,marker.lng).then(
        response => {
          console.log(response)
          const address = response.results[0].formatted_address
          const length = response.results[0].address_components.length
          const postcode = response.results[0].address_components[length-1].long_name
          console.log(postcode.indexOf('-'))
          if(postcode.indexOf('-') != -1){ //결과값이 없으면 -1 반환
            setSelectedPc(postcode)
          }else{
            setSelectedPc("정보없음")
          }
          setSelectedAddr(address)
          console.log(address);
        },
        error => {
          console.error(error);
        }
    );
  };

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
              navigator.geolocation.getCurrentPosition(
                  (position) => {
                    const currentPosition = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    }
                    panTo(currentPosition);
                    setCurrentPosition(currentPosition);
                  },
                  () => null
              );
            }}
        >
          <img src="https://image.flaticon.com/icons/png/128/487/487021.png"/>
        </button>
    );
  }
  function Search({ panTo }) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => 37.553818, lng: () => 126.886020 },
        radius: 200 * 1000,
      },
    });

    const handleInput = (e) => {
      setValue(e.target.value);
    };

    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();

      try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        const postal_code = await getZipCode(results[0],false)
        panTo({ lat, lng });
        setSelectedPc(postal_code)
        setSearchLocation({ lat, lng });
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    return (
        <div className="search" style={{left:"55%"}}>
          <Combobox onSelect={handleSelect}>
            <ComboboxInput
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder=" Search your location"
                className={"form-control-plaintext "}
            />
            <ComboboxPopover>
              <ComboboxList>
                {status === "OK" &&
                data.map(({ id, description }) => (
                    <ComboboxOption key={id} value={description} />
                ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        </div>
    );
  }


  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="dashboard-left">
                <div className="collection-mobile-back">
                    <CardActions className={classes.actions}>
                        <Button
                            color="primary"
                            size="small"
                            variant="text"
                            href="/map"
                            style={{left:'-80%'}}
                        >
                            전체보기<ArrowRightIcon/>
                        </Button>
                    </CardActions>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="dashboard-right">
                <Locate panTo={panTo} />
                <Search panTo={panTo} />

                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}
                    onClick={onMapClick}
                    onLoad={onMapLoad}
                >

                  {
                    currentPosition.lat ?
                        <Marker
                            position={currentPosition}
                            onClick={() => {
                              geocode(currentPosition)
                              setSelected(currentPosition)
                              setInfoShow(true)
                            }}
                            icon={{
                              url : "https://image.flaticon.com/icons/png/128/487/487021.png",
                              scaledSize : new window.google.maps.Size(40,40)
                            }}
                        />
                        :null
                  }
                  {
                    searchLocation.lat ?
                        <Marker
                            position={searchLocation}
                            onClick={() => {
                              geocode(searchLocation)
                              setSelected(searchLocation)
                              setInfoShow(true)
                            }}
                            icon={{
                              url : "https://image.flaticon.com/icons/png/128/487/487021.png",
                              scaledSize : new window.google.maps.Size(40,40)
                            }}
                        />
                        :null
                  }
                  {
                    markers.map((marker) => (
                        <Marker
                            key={`${marker.lat}-${marker.lng}`}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            onClick={() => {
                              geocode(marker)
                              setSelected(marker);
                              setInfoShow(true)
                            }}
                            icon={{
                              url: `https://image.flaticon.com/icons/png/128/487/487021.png`,
                              scaledSize: new window.google.maps.Size(40, 40),
                            }}
                        />
                    ))
                  }
                  {
                    infoShow ? (
                        <InfoWindow
                            position={{ lat: selected.lat, lng: selected.lng }}
                            onCloseClick={() => {setInfoShow(false);}}
                            clickable={true}
                        >
                          <div>
                            <MDBCol>
                              <MDBCard>
                                <MDBCardBody>
                                  <MDBCardText>
                                    <h3><span>우편번호 </span></h3><br/>
                                    <h4>{selectedPc} </h4><br/>
                                    <h3><span>주소</span></h3><br/>
                                    <h4>{selectedAddr} </h4>
                                  </MDBCardText>
                                </MDBCardBody>
                              </MDBCard>
                            </MDBCol>
                          </div>
                        </InfoWindow>
                    ) : null
                  }
                </GoogleMap>
              </div>
            </div>

          </div>
        </div>
      </>
  );
}

export default Map