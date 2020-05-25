import React, { Component } from "react"
import landing from "../images/landing.png"

class Contact extends Component {
  render() {
    return (
      <div className="section_4">
        <div className="section_4_card">
          <p className="section_4_contact">CONTACT US</p>
          <h2>How this works</h2>
          <p className="section_4_text">
            We can deliver groceries & meals or even help pick up your daily
            errands!
          </p>
          <p className="step">STEP 1</p>
          <p className="step_text" style={{ marginBottom: "15px" }}>
            Call our number at
            <span style={{ color: "#61BE4E", padding: "0" }}>
              {" "}
              <b> (323) 310-0411</b>
            </span>
          </p>
          <p className="step">STEP 2</p>
          <p className="step_text">
            Leave a brief message describing what you need (i.e, groceries,
            medication, meal)
          </p>
          <p className="step">STEP 3</p>
          <p className="step_text">
            We’ll connect you with a background-checked neighbor within 24 hours
            to help
          </p>
        </div>
        <div className="section_4_image">
          <img
            src={landing}
            className="section_4_image_img"
            alt="corona cartoon old lady"
          />
        </div>
        <style jsx>
          {`
            .section_4 {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              padding: 0rem 0rem 0rem 5rem;
              margin-top: 110px;
            }
            .section_4_contact {
              width: 115px;
              height: 28px;
              font-family: Helvetica;
              font-style: normal;
              font-weight: bold;
              font-size: 12px;
              line-height: 17px;
              letter-spacing: 0.03em;
              color: #61be4e;
            }
            .section_4_text {
              font-family: "GT Walsheim Pro Light";
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: 30px;
              letter-spacing: 0.03em;
              color: #363f41;
              margin-top: 24px;
              margin-bottom: 24px;
            }
            .section_4_card h2 {
              font-family: "Space Grotesk";
              font-weight: 600;
              font-style: normal;
              font-size: 36px;
              line-height: 163.92%;
              letter-spacing: 0.03em;
              color: #363f41;
            }
            .step {
              width: 157px;
              font-family: "GT Walsheim Pro Light";
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 163.92%;
              letter-spacing: 0.05em;
              color: #6b6b6b;
            }
            .step_text {
              font-family: "Space Grotesk";
              font-style: normal;
              font-weight: normal;
              font-size: 20px;
              line-height: 163.92%;
              letter-spacing: 0.03em;
              color: #363f41;
              margin-bottom: 27px;
            }
            .section_4_card {
              background: rgba(255, 255, 255, 0.9);
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
              padding: 4rem;
              width: 53%;
              border-top: 15px solid #61be4e;
              position: relative;
            }
            .section_4_image {
              display: flex;
              justify-content: flex-end;
              position: absolute;
              left: 53%;
            }
            .section_4_image img {
              width: 100% !important;
            }
            @media screen and (min-width: 1512px) {
              .section_4_image {
                margin-top: -100px !important;
                left: 60%;
              }
            }
            @media screen and (min-width: 1830px) {
              .section_4_image {
                margin-top: -100px !important;
                left: 65%;
              }
            }
            @media screen and (min-width: 2100px) {
              .section_4_image {
                margin-top: -100px !important;
                left: 70%;
              }
            }
            @media screen and (max-width: 768px) {
              .section_4_card {
                padding: 1rem;
              }
              .section_4_card {
                position: static;
                width: 100%;
                margin-bottom: 10%;
              }
              .section_4_image {
                position: static;
                left: 0;
                justify-content: center;
              }
              .section_4 {
                display: flex;
                flex-direction: column-reverse !important;
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default Contact
