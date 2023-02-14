import React from "react";
import { RxPerson } from "react-icons/rx";
import { BsChatFill, BsThreeDots } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
function NavBbar() {
  const Bnav = styled.div`
    border-top: solid 0.2px #dbdbdb;
    height: 15vw;
    position: sticky;
  `;
  const Ulbottom = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 4fr 4fr 4fr 4fr;
    
    .unread
    {
      position:absolute;
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
      right: 56vw;
    }
    .dot
    {
    background-color: red;
    border-radius: 10px;
    position: absolute;
    z-index:2;
    height: 1.5vw;
    width: 1.5vw;
    right: 13vw;
    }
  `;
  let unread = 1;
  return (
    <Bnav>
      <Ulbottom>
        <li>
          <RxPerson size={30} />
        </li>
        <li>
          <div className="unread">{unread}</div>
          <BsChatFill size={30} />
        </li>
        <li>
          <AiOutlineSearch size={30} />
        </li>
        <li>
          <span className="dot"></span>
          <BsThreeDots size={30} />
        </li>
      </Ulbottom>
    </Bnav>
  );
}

export default NavBbar;
