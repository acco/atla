import React from "react"

const Hero = () => {
  return (
    <div className="main-hero">
      <div className="hero">
        <div className="hero-content">
          <h1>
            Helping seniors and
            <br /> the immunocompromised <br />
            during COVID-19
          </h1>
          <p>
            We connect seniors to background-checked neighbors to <br /> help
            with grocery and medication deliveries within 24 hours
          </p>
          <div>
            <div className="hero-button">
              <a href="tel:323-310-0411">
                <button className="call">
                  Call for help at <b>(323) 310-0411</b>
                </button>
              </a>
              <a
                href="https://alltogether.typeform.com/to/Fl5Aku"
                target="_blank"
              >
                <button className="volunteer-button">Volunteer with us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero {
            display: flex;
            justify-content: space-between;
            background-color: #000000;
            background: url('${require("../images/background-img.jpg")}') no-repeat 80% center fixed;
            margin-top: -60px;
            height: 743px;
          }
          .hero-content {
            margin-top: 185px;
            margin-left: 132px;
            width: 635px;
          }
          .hero-content h1 {
            font-family: "Space Grotesk";
            height: 157px;
            font-weight: bold;
            font-size: 40px;
            line-height: 140%;
            letter-spacing: 0.03em;
            color: #393939;
          }
          .hero-content p {
            margin-top: 30px;
            width: 593px;
            height: 124px;
            font-weight: normal;
            font-family: "GT Walsheim Pro Light";
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 180%;
            letter-spacing: 0.03em;
            color: #393939;
          }
          .call {
            width: 310px;
            height: 46px;
            border: #61be4e;
            background: #61be4e;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
            border-radius: 23px;
            font-family: "GT Walsheim Pro Light";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 109.28%;
            letter-spacing: 0.03em;
            color: #ffffff;
            margin-right: 26px;
          }
          .volunteer-button {
            width: 215px;
            background: transparent;
            height: 46px;
            border: 1px solid #a0a0a0;
            box-sizing: border-box;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
            border-radius: 23px;
            font-family: "GT Walsheim Pro Light";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 109.28%;
            letter-spacing: 0.03em;
            color: #444444;
          }
          .hero-button button {
            cursor: pointer;
          }

          @media screen and (max-width: 1150px) {
            .hero {
              background-image: url('${require("../images/background-img.jpg")}') !important;
              background-position: center !important;
              margin-top: -60px;
              background-repeat: no-repeat;
              background-size: cover !important;
            }
          }
          @media screen and (max-width: 768px) {
            .hero {
              background-image: url('${require("../images/background-img-mobile.png")}') !important;
              background-position: center !important;
              margin-top: -112px !important;
              background-repeat: no-repeat;
              background-size: cover !important;
            }
            .hero,
            .section_5,
            .section_6 {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin: 0 auto;
              text-align: center;
            }
            .hero {
              padding: 1rem;
              margin-top: -100px;
            }
            .hero-content {
              width: 100%;
              margin-left: 0px;
            }
            .hero-content h1 {
              letter-spacing: 0;
              font-size: 30px;
            }
            .hero-content p {
              width: 100%;
              font-weight: bold;
            }
            .hero-button {
              display: flex;
              flex-direction: column;
              gap: 10px;
              flex-wrap: wrap;
              margin-top: 50px;
            }
           
            .call {
              justify-self: center;
              margin: 0 auto;
              margin-bottom: 10px;
            }
            .volunteer-button {
              margin: 0 auto !important;
              background-color: white;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Hero
