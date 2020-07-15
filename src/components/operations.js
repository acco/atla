import React, { Component } from "react"
import operation from "../images/operation.png"
import pay from "../images/pay.png"
import safety from "../images/safety.png"

class Operations extends Component {
  render() {
    return (
      <div className="section_5">
        <div>
          <img src={operation} alt="operations" />
          <h4 style={{ marginTop: "30px" }}>Where do we operate?</h4>
          <p>
            We are currently serving all our neighbors in Los Angeles County!
          </p>
        </div>
        <div>
          <img src={pay} alt="pay" style={{ paddingBottom: "2rem" }} />
          <h4>How can I pay for the deliveries?</h4>
          <p>
            Our volunteers will make purchases on your behalf. You can pay them
            back with cash or check, or electronically via Paypal, Venmo, or
            Zelle.
          </p>
        </div>
        <div>
          <img src={safety} alt="safety" style={{ paddingBottom: "2.5rem" }} />
          <div className="section_5_text">
            <h4>What are your safety procedures?</h4>
            <p>
              Our #1 priority is the safety of our volunteers and seniors.
              That’s why all of our background-checked volunteers are instructed
              to make contactless deliveries and are provided with masks,
              gloves, and hand sanitizer.
            </p>
          </div>
        </div>
        <style jsx>
          {`
            .section_5 {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between !important;
              margin: 0 auto;
              margin-top: 110px;
              padding-left: 10rem;
              padding-right: 10rem;
            }
            .section_5 h4 {
              font-family: "Space Grotesk";
              width: 350px;
              font-style: normal;
              font-weight: bold;
              font-size: 20px;
              line-height: 163.92%;
              letter-spacing: 0.03em;
              color: #202222;
              margin-bottom: 4px;
            }

            .section_5 p {
              width: 335px;
              font-family: "GT Walsheim Pro Light";
              font-style: normal;
              font-weight: 300;
              font-size: 20px;
              line-height: 163.92%;
              letter-spacing: 0.03em;
              color: #202222;
            }

            .section_5 img {
              width: 250px;
              margin: 0 auto;
            }

            @media screen and (max-width: 1385px) {
              .section_5 {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between !important;
                margin: 0 auto;
                margin-top: 110px;
                padding-left: 5rem;
                padding-right: 5rem;
              }
            }
            @media screen and (max-width: 1222px) {
              .section_5 {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between !important;
                margin: 0 auto;
                margin-top: 110px;
                padding-left: 3rem;
                padding-right: 3rem;
              }
              .section_5 p {
                width: 300px;
                font-family: "GT Walsheim Pro Light";
                font-style: normal;
                font-weight: 300;
                font-size: 20px;
                line-height: 163.92%;
                letter-spacing: 0.03em;
                color: #202222;
              }
              .section_5 h4 {
                width: 300px;
              }
            }

            @media screen and (max-width: 1000px) {
              .section_5 {
                flex-wrap: wrap;
              }
              .section_5 div {
                width: 100%;
                text-align: center;
              }
              .section_5 h4 {
                width: 100%;
              }
              .section_5 p {
                width: 100%;
              }
            }
            @media screen and (max-width: 768px) {
              .section_5 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 auto;
                text-align: center;
              }
              .section_5 {
                padding-left: 1rem;
                padding-right: 1rem;
              }
              .section_5 h4 {
                text-align: center;
                width: 100%;
              }
              .section_5 p {
                text-align: center;
                width: 100%;
              }

              .section_5 div {
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default Operations
