/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import styled from "styled-components";
import { BsChat } from "react-icons/bs";
import { IoMusicalNotesOutline } from "react-icons/io5";

function TopNav() {
  const NavBar = styled.section`
    .nav {
      display: grid;
      grid-template-columns: 2fr 2.5fr 3fr;
      align-items: baseline;
      justify-items: end;
    }

    .title {
      font-weight: 500;
      font-size: 8vw;
      margin-left: 4vw;
    }
  `;
  const Myul = styled.ul`
    list-style: none;
    display: grid;
    width: 100%;
    grid-template-columns: 4fr 4fr 4fr 4fr;
  `;
  return (
    <NavBar>
      <div className="nav">
        <span className="title">Chats</span>
        <div></div>
        <Myul>
          <li>
            <AiOutlineSearch size={27} />
          </li>
          <li>
            <BsChat size={23} />
          </li>
          <li>
            <IoMusicalNotesOutline size={27} />
          </li>
          <li>
            <AiOutlineSetting size={27} />
          </li>
        </Myul>
      </div>
    </NavBar>
  );
}

export default TopNav;
