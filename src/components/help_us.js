import React, { Component } from "react"
import { BsArrowRight } from "react-icons/bs"
import man from "../images/man.webp"
import hand from "../images/hand.webp"
import heart from "../images/heart.webp"
import { Link } from "gatsby"

class HelpUs extends Component {
  render() {
    return (
      <div className="section_6">
        <div
          style={{
            background: `url(${man})`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "cover",
          }}
        >
          <h3>Get help</h3>
          <p style={{ marginBottom: "2rem" }}>
            Tell us what you need and we’ll connect with you a
            background-checked neighbor within 24 hours.
          </p>
          <div>
            <a style={{ color: "#61be4e" }} href="tel:323-310-0411">
              <span>
                <b>
                  {" "}
                  Call us now{" "}
                  <BsArrowRight
                    className="arrow"
                    style={{ verticalAlign: "middle" }}
                  />
                </b>
              </span>
            </a>
            <br />
            <a
              style={{ color: "#61be4e" }}
              href=" https://www.notion.so/Resources-for-LA-Seniors-7b5d40bf627c42e1a9e7d17cdfa99f6f"
              target="_blank"
            >
              <span>
                <b>
                  Find Resources{" "}
                  <BsArrowRight
                    className="arrow"
                    style={{ verticalAlign: "middle" }}
                  />
                </b>
              </span>
            </a>
          </div>
        </div>
        <div
          style={{
            background: `url(${hand})`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "cover",
          }}
        >
          <h3>Volunteer</h3>
          <p>
            If you are an LA County resident who would like to volunteer with
            us, we would love your help!
          </p>
          <a
            style={{ color: "#61be4e" }}
            href="https://alltogether.typeform.com/to/Fl5Aku"
            target="_blank"
          >
            <div style={{ marginTop: "2rem", color: "#61be4e" }}>
              <b>
                {" "}
                Sign up now{" "}
                <BsArrowRight
                  className="arrow"
                  style={{ verticalAlign: "middle" }}
                />
              </b>
            </div>
          </a>
        </div>
        <div
          style={{
            background: `url(${heart})`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "cover",
          }}
        >
          <h3>Donate</h3>
          <p>Support our cause and make a difference!</p>
          <a href="/donate">
            <div style={{ marginTop: "3.8rem", color: "#61be4e" }}>
              <b>
                {" "}
                Donate here{" "}
                <BsArrowRight
                  className="arrow"
                  style={{ verticalAlign: "middle" }}
                />
              </b>
            </div>
          </a>
        </div>
        <style jsx>
          {`
            .section_6 {
              display: flex;
              margin-top: 110px;
            }
            .section_6 div {
              width: 100%;
              text-align: center;
            }
            .section_6 h3 {
              font-family: "Space Grotesk";
              font-style: normal;
              font-weight: 600;
              font-size: 35px;
              line-height: 163.92%;
              text-align: center;
              letter-spacing: 0.03em;
              color: white;
              margin-top: 100px;
            }
            .section_6 p {
              font-family: "GT Walsheim Pro Light";
              padding: 0rem 4rem 0rem 4rem;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 163.92%;
              text-align: center;
              letter-spacing: 0.03em;
              color: white;
              margin-top: 15px;
            }
            .section_6 div {
              font-family: "GT Walsheim Pro Light";
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 163.92%;
              text-align: center;
              letter-spacing: 0.03em;
              color: #29721a;
              margin-bottom: 2rem;
            }
            @media screen and (max-width: 1000px) {
              .section_6 div {
                width: 100% !important;
                text-align: center;
                margin-bottom: 0 !important;
                padding-bottom: 30px !important;
              }
              .section_6 h3 {
                margin-top: 50px !important;
              }
              .section_6 {
                flex-direction: column !important;
              }
            }
            @media screen and (max-width: 768px) {
              .section_6 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 auto;
                text-align: center;
                padding-left: 1rem;
                padding-right: 1rem;
              }
              .section_6 div {
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default HelpUs
