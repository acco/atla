import React, { Component } from "react"
import Lorena from "../images/Lorena.png"
import Anthony from "../images/Anthony.png"
import Ben from "../images/Ben.png"
import Eric from "../images/Eric.png"
import Mitch from "../images/Mitch.png"
import Kayla from "../images/Kayla.png"
import Nisha from "../images/Nisah.png"
import Priya from "../images/Priya.png"
import Jayen from "../images/Jayen.png"

class About extends Component {
  render() {
    return (
      <div className="section_7" id="about">
        <h2>About Us</h2>
        <p>
          We’re a group of professionals across the Entertainment, Health,{" "}
          <br />
          Legal, Social Services, and Tech Sectors.
        </p>
        <div className="team">
          <div className="team_card">
            <img src={Lorena} alt="Lorena" />
            <h4>Lorena</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Kayla} alt="Kayla" />
            <h4>Kayla</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Ben} alt="Ben" />
            <h4>Ben</h4>
            <p>Santa Monica</p>
          </div>
          <div className="team_card">
            <img src={Priya} alt="Ben" />
            <h4>Priya</h4>
            <p>Manhattan Beach</p>
          </div>
          <div className="team_card">
            <img src={Eric} alt="Eric" />
            <h4>Eric</h4>
            <p>Venice</p>
          </div>
          <div className="team_card">
            <img src={Mitch} alt="Mitch" />
            <h4>Mitch</h4>
            <p>Bentwood</p>
          </div>
          <div className="team_card">
            <img src={Jayen} alt="Ben" />
            <h4>Jayen</h4>
            <p>Houston, TX</p>
          </div>
          <div className="team_card">
            <img src={Anthony} alt="Anthony" />
            <h4>Anthony</h4>
            <p>Santa Monica</p>
          </div>{" "}
          <div className="team_card">
            <img src={Nisha} alt="Nisha" />
            <h4>Nisha</h4>
            <p>Manhattan Beach</p>
          </div>
        </div>
        <style jsx>
          {`
            .section_7 {
              display: flex;
              flex-direction: column;
              margin-top: 100px;
              text-align: center;
            }
            .section_7 h2 {
              font-family: "Space Grotesk";
              font-style: normal;
              font-weight: 600;
              font-size: 36px;
              line-height: 163.92%;
              margin-bottom: 37px;
              letter-spacing: 0.05em;
              color: #363f41;
            }
            .section_7 p {
              font-family: "GT Walsheim Pro Light";
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: 30px;
              text-align: center;
              letter-spacing: 0.03em;
              color: #515151;
              margin-bottom: 37px;
            }
            .team {
              display: flex;
              flex-wrap: wrap;
              -webkit-flex-wrap: wrap;
              margin: 0rem 10rem 0rem 18rem;
              flex-direction: row;
              justify-content: flex-start;
            }
            .team_card {
              display: flex;
              flex-direction: column;
              width: 172px;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
              margin: 0.2rem;
              margin-bottom: 20px;
            }
            .team_card h4 {
              font-weight: 600;
              font-family: "Space Grotesk";
              font-size: 16px;
              line-height: 163.92%;
              padding: 0.5rem;
              text-align: center;
              letter-spacing: 0.03em;
              color: #434343;
            }
            .team_card p {
              font-weight: normal;
              font-size: 14px;
              line-height: 3.92%;
              text-align: center;
              letter-spacing: 0.03em;
              padding-bottom: 0.5rem 0.5rem 0rem 0.5rem;
              color: #434343;
            }
            @media screen and (max-width: 1245px) {
              .team {
                display: flex;
                flex-wrap: wrap;
              }
            }
            @media screen and (max-width: 1385px) {
              .team {
                justify-content: center;
                margin: 0rem 5rem 0rem 5rem;
              }
              .team_card {
                justify-self: flex-start;
              }
            }

            @media only screen and (max-width: 768px) and (min-width: 412px) {
              .team_card {
                width: 26% !important;
              }
            }
            @media screen and (max-width: 768px) {
              .team {
                margin: 0 auto;
              }
              .section_7 {
                padding-left: 1rem;
                padding-right: 1rem;
              }

              .team_card {
                width: 70%;
                height: 40%;
                margin: 0 auto;
                margin-bottom: 0;
                margin-bottom: 10px;
                justify-self: center;
                justify-content: center;
              }
              .team_card img {
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default About
