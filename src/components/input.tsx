import { useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "../assets/icon-arrow.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainerProps } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Input() {
  const [data, setData] = useState<any>(null);
  const [IPAddress, setIPAddress] = useState<any>(null);
  const [clone, setClone] = useState<string>("");
  const [valid, setValid] = useState<boolean | null>(null);
  const [info, setInfo] = useState<boolean | null>(true);

  const getIP = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_dZvsAtoThw26yo2lBunseexUrcFbe&ipAddress=${IPAddress}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setData(null);
        console.log("afawfawfaw");
      });
  };

  useEffect(() => {
    if (valid) {
      getIP();
    } else {
      setData(null);
    }
  }, [IPAddress]);

  return (
    <MainInputWrapper>
      <h1>IP Address Tracker</h1>
      <InputWrapper>
        <input
          style={{ border: valid == false ? "1px solid red" : "" }}
          type="text"
          onChange={(e) => {
            setClone(e.target.value);
          }}
        ></input>
        <div
          onClick={() => {
            setIPAddress(clone);

            const isValid =
              /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi.test(
                clone
              );
            setValid(isValid);
          }}
        >
          <img src={arrow} />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          style={{
            height: "30px",
          }}
          onClick={() => {
            console.log("awdawd");
            setInfo(!info);
            console.log(info);
          }}
        />
      </InputWrapper>

      <InfoWrapper style={{ display: info ? "none" : "flex" }}>
        <div>
          <p>IP ADDRESS</p>
          <h2>{IPAddress}</h2>
        </div>
        <hr></hr>
        <div>
          <p>LOCATION</p>
          <h2>
            {data
              ? `${data?.location.region}, ${data?.location.country}`
              : null}
          </h2>
        </div>
        <hr></hr>
        <div>
          <p>TIMEZONE</p>
          <h2>{data?.location.timezone}</h2>
        </div>
        <hr></hr>
        <div>
          <p>ISP</p>
          <h2>{data?.isp}</h2>
        </div>
      </InfoWrapper>

      {data && (
        <MapContainer
          center={[data?.location.lat, data?.location.lng] as [number, number]}
          zoom={13}
          scrollWheelZoom={true}
          style={{
            height: "1000px",
            width: "100vw",
            position: "absolute",
            left: "0px",
            top: "190px",
            zIndex: -2,
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[data?.location.lat, data?.location.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </MainInputWrapper>
  );
}
export default Input;

const MainInputWrapper = styled.div`
  padding: 40px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #fff;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 555px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  input {
    width: 100%;
    max-width: 555px;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 0px 30px;
  }
  div {
    width: 40px;
    height: 100%;
    position: absolute;
    right: 30px;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: black;
    img {
      z-index: 2;
      position: absolute;
      transform: translate(70%, 70%);
      height: 40%;
      width: 40%;
    }
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: fit-content;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #0750a3;
  transition: all 1s ease;
  @media (width < 800px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    max-width: 400px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    p {
      color: #2c2c2c;
    }
    h2 {
      color: black;
    }
  }
  hr {
    height: 100px;
    width: 1px;
    border: none;
    background-color: #2c2c2c;
    @media (width < 800px) {
      display: none;
    }
  }
`;
