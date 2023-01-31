import styled from "styled-components";
import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import banner1 from "../pictures/Bohemian.jpeg";
import background1 from "../pictures/background2.svg";
import background2 from "../pictures/weddingVenue.jpeg";
import "../fonts/AmsterdamOneSlant-0WglP.ttf";
import "../fonts/Fontspring-DEMO-theseasons-reg.ttf";

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledApp>
      <Header />
      <div className="banner1"></div>
      <div className="inviteDate">
        <div className="textBox">
          <h4 className="saveTheDate">SAVE THE DATE</h4>
          <h2 className="couple">Emma & Richard</h2>
          <h4 className="date">22 . 07 . 2023</h4>
          <h5 className="font-family-theSeasons ">
            3353 Charles Mary Montreal , QC{" "}
          </h5>
        </div>
      </div>
      <div className="banner2"></div>
      <button className="rsvp" onClick={() => navigate("/form")}>
        RSVP
      </button>
      <div className="footerLogo">
        <h3>R M</h3>
        <hr></hr>
        <h5>22.7.2023</h5>
      </div>
    </StyledApp>
  );
};
export default Home;

export const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 251, 239);

  .banner1 {
    width: 100%;
    height: 35vh;
    background-image: url(${banner1});
    background-size: cover;
    background-position: center;
  }

  .inviteDate {
    width: 100%;
    height: 45vh;
    background-image: url(${background1});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .textBox {
      width: 65%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #7d4e4e;
    }
  }

  .banner2 {
    width: 100%;
    height: 40vh;
    background-image: url(${background2});
    background-size: cover;
    background-position: center;
  }

  .rsvp {
    width: 45vw;
    height: 2.75rem;
    margin-top: 2.5rem;
    background-color: #e4dfc3;
    border: none;
    color: #7d4e4e;
    border-radius: 5px;
  }
  .footerLogo {
    margin-top: 35px;
    font-family: theSeasons;
    text-align: center;
  }

  .couple {
    font-family: AmsterdamOneSlant;
  }
  .saveTheDate {
    margin: 0;
    font-family: theSeasons;
  }
  .date {
    margin-top: 0;
    font-family: theSeasons;
  }

  .font-family-theSeasons {
    font-family: theSeasons;
  }
`;
