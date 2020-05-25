import React from "react"
import grocery from "../images/grocery.png"
import medicine from "../images/medicine.png"
import phone from "../images/phone.png"
import publics from "../images/public.png"
import { BsArrowRight } from "react-icons/bs"

const Resources = () => {
  return (
    <div>
      <div className="section_3" id="help">
        <p className="section_3_p">OUR RESOURCES</p>
        <h2>How we can help</h2>
        <div className="card-parent">
          <div className="card">
            <div className="icon">
              <img src={grocery} alt="grocery icon" />
            </div>
            <div className="card-text">
              <h5>Grocery</h5>
              <p>
                We can help you arrange grocery deliveries, including picking up
                items at the store on your behalf!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={medicine} alt="medicine icon" />
            </div>
            <div className="card-text">
              <h5>Medication</h5>
              <p>
                We can help you arrange medication deliveries, including picking
                them up at the pharmacy on your behalf.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={phone} alt="phone icon" />
            </div>
            <div className="card-text">
              <h5>Phone Buddy </h5>
              <p>
                Maybe you're just lonely in quarantine? We probably are too 🙂
                We're happy to chat!{" "}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={publics} alt="public gathering" />
            </div>
            <div className="card-text">
              <h5>Public Resources </h5>
              <p>
                We can find support services you may be eligible for and help
                you sign up
                <div
                  style={{
                    marginTop: "1.8rem",
                    color: "#61BE4E",
                  }}
                  className="links"
                >
                  <b>
                    <a
                      href=" https://www.notion.so/Resources-for-LA-Seniors-7b5d40bf627c42e1a9e7d17cdfa99f6f"
                      target="_blank"
                    >
                      {" "}
                      Resources Available{" "}
                      <BsArrowRight
                        className="arrow"
                        style={{ verticalAlign: "middle" }}
                      />
                    </a>
                  </b>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .section_3 {
          display: flex;
          flex-direction: column;
          margin-top: 49px;
          margin-left: 8.2rem;
          margin-right: 8.2rem;
        }

        a {
          text-decoration: none;
          list-style: none;
          color: #61be4e;
        }
        .card-parent {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 44px;
        }
        .card {
          width: 260px;
          height: 307px;
          margin-top: 20px;
          background: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          text-align: center;
          margin-right: 22px;
        }
        .card-text h5 {
          width: 193px;
          height: 69px;
          left: 483px;
          top: 2238px;
          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 163.92%;
          text-align: center;
          letter-spacing: 0.03em;
          color: #363f41;
          margin: 0 auto;
        }
        .icon {
          margin: 0 auto;
          padding-top: 0.7rem;
        }
        .icon img {
          width: 70px;
          height: 70px;
        }
        .card-text p {
          font-family: "GT Walsheim Pro Light";
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 163.92%;
          text-align: center;
          letter-spacing: 0.03em;
          color: #363f41;
          padding: 1px 15px 9px 16px;
        }
        .section_3_p {
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
        .section_3 h2 {
          height: 56px;
          font-family: "Space Grotesk";
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 163.92%;
          letter-spacing: 0.03em;
          color: #363f41;
        }
        @media screen and (max-width: 1396px) {
          .section_3 {
            margin-left: 4rem;
            margin-right: 4rem;
          }
          .card-parent {
            justify-content: space-between;
          }
        }
        @media screen and (max-width: 1000px) {
          .section_3 {
            display: flex;
            flex-direction: column;
            margin-top: 149px;
            margin-left: 2.2rem;
            margin-right: 2.2rem;
          }
          .card-parent {
            justify-content: center;
          }
          .card {
            width: 210px;
            height: 327px;
          }
        }
        @media only screen and (max-width: 768px) and (min-width: 412px) {
          .team_card {
            width: 26% !important;
          }
          .card {
            width: 220px !important;
            height: 357px !important;
          }
          .card-parent {
            flex-direction: row !important;
          }
        }
        @media screen and (max-width: 768px) {
          .section_3 h2 {
            height: 100px;
          }
          .card {
            width: 100%;
          }
          .section_3 {
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .card-parent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  )
}

export default Resources
