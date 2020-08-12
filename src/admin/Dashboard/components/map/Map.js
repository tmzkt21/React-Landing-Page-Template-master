import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import {  MDBCard, MDBCardBody,  MDBCardText, MDBCol } from 'mdbreact';
import './map.css'
import "@reach/combobox/styles.css";
import {Button, Card, CardActions} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {makeStyles} from "@material-ui/styles";

const MAP_KEY='AIzaSyAdb4BpT5FdcmwNVkmh88DHC5n4SaWewRA';

const libraries = ["places"];

const MapTypes = {REQUEST: 'Map/REQUEST'}
const MapRequest = action => ({type: MapTypes.REQUEST, payload: action.payload})
const MapReducer = ( state, action ) => {
  switch (action.type) {
    case MapTypes.REQUEST: return {...state, payload: action.payload}
    default: return state
  }
}

const mapContainerStyle = {
  width: "50%",
  height: "45%",
  left:'0%',
  bottom:'47%'
};
const options = {
  // disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 36.8728622,
  lng: 128.0718825
};
const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));


const charging_station = [
  {
    "bread_id": 1,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "02  32179530",
    "material_area": "44.16",
    "postal_code": 110020,
    "address": "서울특별시 종로구 홍지동 7-1번지 ",
    "road_name": "서울특별시 종로구 홍지문2길 20, 미래백련관5층 (홍지동)",
    "road_postal_code": 3016,
    "store_name": "(주)농협유통 두레미담 상명대점",
    "x_coordinates": 195960.546,
    "y_coordinates": 455612.1227
  },
  {
    "bread_id": 2,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "02  723 4097",
    "material_area": "",
    "postal_code": 110827,
    "address": "서울특별시 종로구 숭인동 1256번지 동보빌딩 1층 ",
    "road_name": "서울특별시 종로구 종로 413 (숭인동,동보빌딩 1층)",
    "road_postal_code": 3111,
    "store_name": "뚜레쥬르신설동역점",
    "x_coordinates": 201910.0383,
    "y_coordinates": 452602.6682
  },
  {
    "bread_id": 3,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "",
    "material_area": "",
    "postal_code": 110827,
    "address": "서울특별시 종로구 숭인동 1081번지 (지상1층) ",
    "road_name": "서울특별시 종로구 숭인동길 34 (숭인동,(지상1층))",
    "road_postal_code": 3111,
    "store_name": "포도나무 베이커리",
    "x_coordinates": 201876.3548,
    "y_coordinates": 452681.5383
  },
  {
    "bread_id": 4,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "",
    "material_area": "",
    "postal_code": 110045,
    "address": "서울특별시 종로구 체부동 183번지 ",
    "road_name": "서울특별시 종로구 자하문로1나길 7-13 (체부동)",
    "road_postal_code": 3041,
    "store_name": "체부동 다락빵",
    "x_coordinates": 197370.2615,
    "y_coordinates": 452713.6639
  },
  {
    "bread_id": 5,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "02  738 1014",
    "material_area": "",
    "postal_code": 110847,
    "address": "서울특별시 종로구 평창동 158-1번지 A동 112호",
    "road_name": "서울특별시 종로구 평창문화로 75 (평창동)",
    "road_postal_code": 3009,
    "store_name": "효모이야기",
    "x_coordinates": 197212.3649,
    "y_coordinates": 456055.2058
  },
  {
    "bread_id": 6,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "02  379 0440",
    "material_area": "",
    "postal_code": 110847,
    "address": "서울특별시 종로구 평창동 182-2번지 1층 ",
    "road_name": "서울특별시 종로구 평창11길 12, 1층 (평창동)",
    "road_postal_code": 3009,
    "store_name": "몽모랑시",
    "x_coordinates": 196986.9317,
    "y_coordinates": 456038.6509
  },
  {
    "bread_id": 7,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "02  745 1551",
    "material_area": "",
    "postal_code": 110460,
    "address": "서울특별시 종로구 연건동 128-8번지 홍익대학교대학로캠퍼스 ",
    "road_name": "서울특별시 종로구 대학로 57, 1층 (연건동, 홍익대학교대학로캠퍼스)",
    "road_postal_code": 3082,
    "store_name": "CU홍대 대학로점",
    "x_coordinates": 200059.5961,
    "y_coordinates": 452693.9469
  },
  {
    "bread_id": 8,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "02  22764948",
    "material_area": "59.76",
    "postal_code": 110160,
    "address": "서울특별시 종로구 공평동 144번지 1층101호 ",
    "road_name": "서울특별시 종로구 삼봉로 94, 1층 101호 (공평동)",
    "road_postal_code": 3158,
    "store_name": "던킨도너츠 종로구청점",
    "x_coordinates": 198360.5482,
    "y_coordinates": 452168.843
  },
  {
    "bread_id": 9,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "",
    "material_area": "",
    "postal_code": 110340,
    "address": "서울특별시 종로구 익선동 55번지 ",
    "road_name": "서울특별시 종로구 돈화문로11가길 59, 1층 111호 (익선동, 현대뜨레비앙)",
    "road_postal_code": 3132,
    "store_name": "파머스반 브레드",
    "x_coordinates": 199052.1642,
    "y_coordinates": 452535.57
  },
  {
    "bread_id": 10,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "",
    "material_area": "",
    "postal_code": 110102,
    "address": "서울특별시 종로구 평동 43번지 경희궁자이3단지 3118호",
    "road_name": "서울특별시 종로구 경교장길 35 (평동, 경희궁자이 3단지3118호)",
    "road_postal_code": 3180,
    "store_name": "스코니",
    "x_coordinates": 197039.3226,
    "y_coordinates": 451838.9866
  },
  {
    "bread_id": 11,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "02  764 0011",
    "material_area": "",
    "postal_code": 110530,
    "address": "서울특별시 종로구 혜화동 126-4번지 1층 ",
    "road_name": "서울특별시 종로구 창경궁로 269, 1층 (혜화동)",
    "road_postal_code": 3075,
    "store_name": "파리바게트 혜화로타리",
    "x_coordinates": 199991.2178,
    "y_coordinates": 453663.1746
  },
  {
    "bread_id": 12,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "02  722 8222",
    "material_area": "82.5",
    "postal_code": 110121,
    "address": "서울특별시 종로구 종로1가 1번지 교보빌딩.1층 ",
    "road_name": "서울특별시 종로구 종로 1 (종로1가,교보빌딩.1층)",
    "road_postal_code": 3154,
    "store_name": "리나스광화문점",
    "x_coordinates": 197993.9046,
    "y_coordinates": 452032.9586
  },
  {
    "bread_id": 13,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "",
    "material_area": "",
    "postal_code": 110122,
    "address": "서울특별시 종로구 종로2가 8-4번지 ",
    "road_name": "서울특별시 종로구 종로 65, 1층 106호 (종로2가)",
    "road_postal_code": 3164,
    "store_name": "종유당",
    "x_coordinates": 198572.8391,
    "y_coordinates": 452022.3732
  },
  {
    "bread_id": 14,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "",
    "material_area": "",
    "postal_code": 110090,
    "address": "서울특별시 종로구 교북동 93-1번지 (1층) ",
    "road_name": "",
    "road_postal_code": null,
    "store_name": "박사 베이커리",
    "x_coordinates": 196648.6428,
    "y_coordinates": 451974.9582
  },
  {
    "bread_id": 15,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "741 0306",
    "material_area": "",
    "postal_code": 110460,
    "address": "서울특별시 종로구 연건동 139-2번지 지상1층 ",
    "road_name": "서울특별시 종로구 대학로 75 (연건동,지상1층)",
    "road_postal_code": 3082,
    "store_name": "빚은 대학로점",
    "x_coordinates": 200093.8272,
    "y_coordinates": 452859.4792
  },
  {
    "bread_id": 16,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "  02 7333200",
    "material_area": "",
    "postal_code": 110140,
    "address": "서울특별시 종로구 수송동 146-1번지 지하1층 ",
    "road_name": "서울특별시 종로구 종로1길 42 (수송동,지하1층)",
    "road_postal_code": 3152,
    "store_name": "아리스타커피 이마빌딩점",
    "x_coordinates": 198076.879,
    "y_coordinates": 452402.1953
  },
  {
    "bread_id": 17,
    "business_status": "영업",
    "closure_business": "",
    "location_Phone": "",
    "material_area": "",
    "postal_code": 110370,
    "address": "서울특별시 종로구 묘동 56번지 단성사(지상4층) ",
    "road_name": "서울특별시 종로구 돈화문로 26 (묘동,단성사(지상4층))",
    "road_postal_code": 3138,
    "store_name": "스위트밀 단성사점",
    "x_coordinates": 199269.1155,
    "y_coordinates": 452076.2256
  }
];

export const Map = () => {
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
        if(postcode.indexOf('-') != -1) {
          selectedPc(postcode)
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
        // console.log(results[0]) formatted address, compo 전부 가져옴
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
      <div className="search" style={{position:"relative",left:'22%',top:'0px',width:'50%',height:'50%'}}>
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

  // function deleteBookmark(info){
  //   alert(JSON.stringify(info))
  //   //db에 저장된 정보 삭제
  // }

  return (
    <>
      <Card style={{position:"relative",width:'80%',height:'82%',left:'0%',top:'1%'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="dashboard-left">
              <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"/> 배송지 조회
                                    </span>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div style={{width:'200%',height:'200%'}} className="dashboard-right">
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
                {/*{*/}
                {/*  charging_station.map((store, i) => (*/}
                {/*    <Marker*/}
                {/*      key={i}*/}
                {/*      position={{lat:store.x_coordinates, lng:store.y_coordinates}}*/}
                {/*      onClick={()=>setSelected(store)}*/}
                {/*      icon={*/}
                {/*        { url : "https://image.flaticon.com/icons/svg/3198/3198588.svg",*/}
                {/*          scaledSize : new window.google.maps.Size(40,40)}*/}
                {/*      }*/}
                {/*    />*/}
                {/*  ))*/}
                {/*}*/}
                {/*{*/}
                {/*  charging_station.map((store, i) => (*/}
                {/*    <Marker*/}
                {/*      key={i}*/}
                {/*      position={{lat:store.x_coordinates, lng:store.y_coordinates}}*/}
                {/*      onClick={()=>setSelected(store)}*/}
                {/*      icon={*/}
                {/*        { url : "https://image.flaticon.com/icons/svg/3198/3198482.svg",*/}
                {/*          scaledSize : new window.google.maps.Size(40,40)}*/}
                {/*      }*/}

                {/*    />*/}
                {/*  ))*/}
                {/*}*/}
                {/*{*/}
                {/*  selected.bread_id && (*/}
                {/*    <InfoWindow*/}
                {/*      position={{lat:selected.x_coordinates, lng:selected.y_coordinates}}*/}
                {/*      clickable={true}*/}
                {/*      onCloseClick={()=>setSelected({})}*/}
                {/*    >*/}
                {/*      <div className="infowindow">*/}
                {/*        <MDBCol>*/}
                {/*          <MDBCard>*/}
                {/*            <MDBCardBody>*/}
                {/*              <MDBCardTitle><h3>{selected.store_name}</h3></MDBCardTitle><br/>*/}
                {/*              <MDBCardText>*/}
                {/*                <h4>가게이름: {selected.store_name}</h4><br/>*/}
                {/*                <h4>주소: {selected.address}</h4><br/>*/}
                {/*                <h4>연락처: {selected.location_Phone}</h4><br/>*/}
                {/*                <h4>영업: {selected.business_status}</h4><br/>*/}
                {/*              </MDBCardText>*/}
                {/*              <MDBBtn color="warning" onClick={()=>deleteBookmark(selected.charging_station_id)}>북마크삭제</MDBBtn>*/}
                {/*            </MDBCardBody>*/}
                {/*          </MDBCard>*/}
                {/*        </MDBCol>*/}
                {/*      </div>*/}
                {/*    </InfoWindow>*/}
                {/*  )*/}
                {/*}*/}
                {/*{*/}
                {/*  selected.bread_id && (*/}
                {/*    <InfoWindow*/}
                {/*      position={{lat:selected.x_coordinates, lng:selected.y_coordinates}}*/}
                {/*      clickable={true}*/}
                {/*      onCloseClick={()=>setSelected({})}*/}
                {/*    >*/}
                {/*      <div className="infowindow">*/}
                {/*        <MDBCol>*/}
                {/*          <MDBCard>*/}
                {/*            <MDBCardBody>*/}
                {/*              <MDBCardTitle><h3>{selected.store_name}</h3></MDBCardTitle><br/>*/}
                {/*              <MDBCardText>*/}
                {/*                <h4>가게이름: {selected.store_name}</h4><br/>*/}
                {/*                <h4>주소: {selected.address}</h4><br/>*/}
                {/*                <h4>연락처: {selected.location_Phone}</h4><br/>*/}
                {/*                <h4>영업: {selected.business_status}</h4><br/>*/}
                {/*              </MDBCardText>*/}
                {/*              <MDBBtn color="warning" onClick={()=>deleteBookmark(selected.sights_id)}>북마크삭제</MDBBtn>*/}
                {/*            </MDBCardBody>*/}
                {/*          </MDBCard>*/}
                {/*        </MDBCol>*/}
                {/*      </div>*/}
                {/*    </InfoWindow>*/}
                {/*  )*/}
                {/*}*/}
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
            <CardActions className={classes.actions}>
              <Button
                color="primary"
                size="small"
                variant="text"
                href="/map"
              >
                전체보기<ArrowRightIcon/>
              </Button>
            </CardActions>
          </div>
        </div>
      </div>
      </Card>
    </>
  );
}

export default MapReducer
