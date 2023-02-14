import React from "react";
import TopNav from "../components/TopNav";
import NavBbar from "../components/NavBbar";
import styled from "styled-components";
import RoomCompnent from "../components/RoomCompnent";
function ChatRoom() {
  const Room = styled.div`
    background-color: white;
    display: grid;
  `;

  const roomObj = [
    {
      image: "logo.png",
      title: "KakaoTalk",
      preShow: "Please check My Kakao Account Info",
      unread: "1",
      time: "21:22",
    },
    {
      image: "logo.png",
      title: "KakaoTalk",
      preShow: "Please check My Kakao Account Info",
      unread: "1",
      time: "21:22",
    },
  ];

  const Chatting = styled.section`
    background-color: white;
    min-height: 145vw;
    width: 100%;
  `;
  return (
    <Room>
      <TopNav />
      <Chatting>
        {roomObj.map((e) => (
          <RoomCompnent {...e} />
        ))}
      </Chatting>
      <NavBbar />
    </Room>
  );
}

export default ChatRoom;
