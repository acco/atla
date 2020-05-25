import React from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import logo from "../images/logo1.png"

const Header = () => {
  return (
    <div>
      <nav className="top-bar">
        <p>Join to help the community during COVID-19</p>
        <div>
          <a href="https://alltogether.typeform.com/to/Fl5Aku" target="_blank">
            <button>
              Volunteer{" "}
              <BsArrowRight
                className="arrow"
                style={{ verticalAlign: "middle" }}
              />
            </button>
          </a>
          <Link to="/donate">
            <button>
              Donate{" "}
              <BsArrowRight
                className="arrow"
                style={{ verticalAlign: "middle" }}
              />
            </button>
          </Link>
        </div>
      </nav>
      <header>
        <Link to="/">
          <div className="logo-section">
            <img src={logo} className="logo" alt="logo" />
            <span>AllTogether LA</span>
          </div>
        </Link>
        <div className="menu">
          <ul>
            <Link to="/#mission">
              <li>Our Mission</li>
            </Link>
            <Link to="/#help">
              <li>Get Help</li>
            </Link>
            <Link to="/#about">
              <li>About Us</li>
            </Link>
            <Link to="/#stories">
              <li>Stories</li>
            </Link>
            <Link to="/#press">
              <li>Press</li>
            </Link>
          </ul>
        </div>
      </header>

      <style jsx>
        {`
          .top-bar {
            width: 100%;
            height: 55px;
            background: #61be4e;
            display: flex;
            justify-content: center;
            padding-bottom: 2px;
          }
          .top-bar p {
            font-family: "Space Grotesk";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 162%;
            letter-spacing: 0.03em;
            color: #ffffff;
            height: 46px !important;
            margin-top: 16px !important;
          }
          .top-bar button {
            margin-top: 10px;
            width: 155px;
            border: 1.5px solid rgba(255, 255, 255, 0.9);
            background: transparent;
            height: 35px;
            font-family: "Space Grotesk";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 162%;
            letter-spacing: 0.03em;
            color: #ffffff;
            margin-left: 18px;
            border-radius: 17.5px;
            cursor: pointer;
          }
          .top-bar button:focus {
            outline: none;
          }
          .arrow {
            vertical-align: middle !important;
          }
          .logo-section {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }

          .logo-section span {
            margin-top: 28px;
            font-family: "Space Grotesk";
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 163.92%;
            letter-spacing: 0.03em;
            color: #393939;
          }
          .logo {
            width: 35px;
            height: 35px;
            text-align: center;
            vertical-align: middle;
            margin-top: 20px;
            margin-left: 28px;
            margin-right: 8px;
          }
          header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            z-index: 1;
            position: relative;
          }
          ul li {
            display: inline-block !important;
            margin-top: 28px;
            padding: 0 2rem 2rem 2rem;
            height: 20px;
            font-family: "Space Grotesk";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 163.92%;
            letter-spacing: 0.03em;
            color: #393939;
            cursor: pointer;
          }
          @media screen and (max-width: 1000px) {
            ul li {
              padding: 0 1rem 2rem 1rem;
            }
          }
          @media screen and (max-width: 768px) {
            .logo {
              margin-left: 0;
            }

            .menu {
              display: flex;
              justify-content: center;
            }
            header {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .logo-section {
              justify-content: center;
              padding-right: 2rem;
            }
            .top-bar {
              height: auto;
              padding: 0rem 1rem 1rem 1rem;
            }
            ul li {
              display: flex;
              padding: 10px 3px 15px 3px;
              font-size: 14px;
            }

            .top-bar {
              width: 100%;
              justify-content: space-evenly;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Header
