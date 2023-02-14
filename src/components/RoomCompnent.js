import React from "react";
import styled from "styled-components";
import { ReactComponent as Reservation } from "../asset/logo.svg";

function RoomCompnent({ image, title, preShow, unread, time }) {
  const RoomBody = styled.div`
    display:grid;
    grid-template-columns: 2fr 8fr 2fr;
    height:16vw;
    margin-left:3vw;
    .logo{

      border-radius 15px;

    }
    .unread
    {
      z-index:3;
      border-radius 10px;
      background-color:red;
      width:fit-content;
      min-width:5vw;
      height:5vw;
      font-size:3vw;
      display : flex;
      justify-content : center;
      align-items : center;
      color:white;
      margin-top:1vw;
      margin-left:3vw;
    }
    .chat
    {
      display:flex;
      flex-direction:column;
      max-width:80%;


    }
    .preshow
    {
      font-size:3vw;
      opacity:0.5;

    }
    .time{
      opacity:0.5;
      font-size:3.2vw;
    }
    .third
    {
      margin:0% auto;
    }
  `;
  return (
    <RoomBody>
      <div>
        <Reservation className="logo" width="45" height="45" fill="" />
      </div>
      <div className="chat">
        <span>{title}</span>
        <span className="preshow">{preShow}</span>
      </div>
      <div className="third">
        <span className="time">{time}</span>
        <div className="unread">{unread}</div>
      </div>
    </RoomBody>
  );
}

export default RoomCompnent;
