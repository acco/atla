import React, { Component } from "react"
import Carousel from "react-elastic-carousel"

import ration from "../images/ration.png"
import santamonica from "../images/santamonica.png"
import press from "../images/press.png"
import covid from "../images/covid.png"

class Press extends Component {
  render() {
    return (
      <div className="section_9" id="press">
        <div className="section_9_text">
          <h1>Press</h1>
          <p className="headline">
            Learn more about what we are doing and what people are saying!
          </p>
          <div className="news">
            <Carousel
              breakPoints={[
                { width: 1, itemsToShow: 1 },
                { width: 699, itemsToShow: 2 },
                { width: 1000, itemsToShow: 3 },
              ]}
              itemsToScroll={3}
              className="car"
              showArrows={false}
              itemPadding={[0, 10, 0, 10]}
            >
              <div className="news-card">
                <a
                  href="https://abc7.com/non-profit-covid19-all-together-la-seniors/6199498/"
                  target="_blank"
                >
                  <img src={press} wdith="326" height="213" />
                  <h6>
                    <b>abc7</b>
                  </h6>
                  <h3>
                    Seniors get more help with grocery deliveries as non-profit
                    grows...{" "}
                  </h3>
                  <p>
                    AllTogether LA matches volunteers with seniors for free
                    grocery and medicine deliveries during...
                  </p>
                </a>
              </div>
              <div className="news-card">
                <a
                  href="https://www.insideedition.com/en-route-with-volunteers-who-are-helping-the-elderly-get-groceries-during-the-coronavirus"
                  target="_blank"
                >
                  <img src={ration} />
                  <h6>
                    <b>Inside Edition</b>
                  </h6>
                  <h3>
                    En Route with Volunteers Who Are Helping the Elderly Get...
                  </h3>
                  <p>
                    The co-founder of AllTogether LA is taking Inside Edition to
                    a local Los Angeles grocery store so...
                  </p>
                </a>
              </div>
              <div className="news-card">
                <a
                  href="https://abc7.com/coronavirus-seniors-covid-19-groceries/6045815/"
                  target="_blank"
                >
                  <img src={santamonica} />
                  <h6>
                    <b>abc7</b>
                  </h6>
                  <h3>
                    Santa Monica volunteers protect seniors with new grocery...{" "}
                  </h3>
                  <p>
                    The co-founder of AllTogether LA is taking Inside Edition to
                    a local Los Angeles grocery store so...
                  </p>
                </a>
              </div>
              <div className="news-card">
                <a
                  href="https://www.smdp.com/community-comes-together-to-help-seniors-combat-covid-19/188132"
                  target="_blank"
                >
                  <img src={covid} />
                  <h6>
                    <b>Santa Monica Daily Press</b>
                  </h6>
                  <h3>
                    Community comes together to help seniors combat COVID-19
                  </h3>
                  <p>
                    On a random trip to the grocery store Friday night, Lorena
                    Camarena encountered what thousands...
                  </p>
                </a>
              </div>
            </Carousel>
          </div>
        </div>
        <style jsx>
          {`
            .hXQwGq {
              background-color: #bfe8b6 !important;
              border: #bfe8b6 !important;
              box-shadow: rgba(191, 232, 182, 0.5) 0px 0px 1px 2px !important;
            }
            .hXQwGq button {
              border-color: #bfe8b6 !important;
            }
            .abcotv body {
              background: transparent !important;
            }
            .news {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-top: 20px;
            }

            .news-card {
              border: 1px solid #e3e3e3;
              box-sizing: border-box;
              border-radius: 12px;
              width: 328px;
              margin-top: 50px;
            }
            .news-card img {
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
            }
            .jBnCOy {
              margin-top: -100px !important;
            }
            .QmVdP,
            .kbDIuN {
              background-color: #61be4e !important;
              box-shadow: 0 0 1px 3px #61be4e !important;
            }

            .dautGI:hover,
            .dautGI:focus {
              outline: none !important;
              background-color: transparent;
              font-size: 1.3em;
              content: "";
              height: 10px;
              width: 10px;
              box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.5) !important;
              border-radius: 50%;
              outline: none;
            }
            .rec-slider div:focus {
              outline: none !important;
              border: none !important;
            }

            .section_9 h1 {
              font-family: "Space Grotesk";
              font-weight: 600;
              font-size: 36px;
              line-height: 163.92%;
              margin-bottom: 28px;
              text-align: center;
              letter-spacing: 0.05em;
              color: #363f41;
            }
            .headline {
              font-family: "GT Walsheim Pro Light";
              width: 30%;
              text-align: center;
              margin: 0 auto;
              font-weight: 300;
              font-size: 18px;
              line-height: 30px;
              text-align: center;
              letter-spacing: 0.03em;
              color: #515151;
            }
            .section_9 {
              display: flex;
              flex-direction: column;
              padding: 5rem 10rem 5rem 10rem;
              margin-top: 70px;
              justify-content: flex-start;
            }
            .news-card h3 {
              font-size: 16px;
              line-height: 130%;
              font-family: "Space Grotesk";
              padding: 0rem 1rem 0 1rem;
              font-style: normal;
              font-weight: normal;
              letter-spacing: 0.03em;
              color: #363f41;
            }
            .news-card h6 {
              font-size: 14px;
              line-height: 163.92%;
              font-family: "GT Walsheim Pro Light";
              letter-spacing: 0.03em;

              padding: 1rem;
              color: #61be4e;
              display: flex;
              justify-self: flex-start;
            }
            .news-card p {
              font-weight: 300;
              font-style: normal;
              font-size: 12px;
              padding: 1rem;
              line-height: 20px;
              letter-spacing: 0.03em;
              font-family: "GT Walsheim Pro Light";
              color: #9f9f9f;
            }

            .news-card a {
              font-style: none;
              text-decoration: none;
            }
            @media screen and (max-width: 1385px) {
              .section_9 {
                padding: 5rem;
              }
            }
            @media screen and (max-width: 768px) {
              .headline {
                width: 100%;
              }
              .section_9 {
                padding-left: 1rem;
                padding-right: 1rem;
              }
              .rec-slider-container,
              .car {
                width: 110% !important;
                padding: 0 !important;
                margin: 0 !important;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default Press
