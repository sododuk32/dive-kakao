import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SingIn() {
  const Main = styled.div`
    width: 100%;
    max-width: 800px;
    text-align: center;
  `;

  const Header = styled.header`
    margin-top: 14vw;
    .title {
      font-weight: 500;
      font-size: 5vw;
    }
    .headerSpan {
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      opacity: 0.61;
      font-size: 4vw;
      margin-top: 3%;
      margin-bottom: 13%;
    }
  `;
  const Input1 = styled.article`
    .Email,
    .Pw {
      width: 90%;
      height: 13vw;
      font-size: 4vw;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 50;
      opacity: 0.61;
      margin-bottom: 4vw;
    }
  `;
  const Buttons = styled.article`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    .signUp {
      display: flex;
      flex-direction: column;
    }
    .btn {
      background-color: white;
      font-weight: 500;
      font-size: 3.6vw;
      margin-top: 5vw;
      margin-bottom: 4vw;
      border: none;
    }
    .find {
      margin-top: 2vw;
      background-color: white;
      font-weight: 500;
      font-size: 3vw;
      border: none;
      width: 50%;
      height: 4vw;
    }
  `;
  const navigate = useNavigate();

  return (
    <Main>
      <Header className="headertop">
        <span className="title">Welcome to KakaoTalk</span>
        <div className="headerSpan">
          <span className="firstSpan">If you have a Kakao Account,</span>
          <span className="secondSpan">
            log in with your email or phone number
          </span>
        </div>
      </Header>
      <section>
        <Input1>
          <div>
            <input
              className="Email"
              type="text"
              placeholder="Email or phone number"
            />
            <input className="Pw" type="text" placeholder="Password" />
          </div>
        </Input1>
        <Buttons>
          <div className="signUp">
            <button className="btn" onClick={() => navigate("/ChatRoom")}>
              Log In
            </button>

            <button className="btn">Sign Up</button>
          </div>
          <button className="find">Find Kakao Account or Password</button>
        </Buttons>
      </section>
    </Main>
  );
}

export default SingIn;
