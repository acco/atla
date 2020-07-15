import React from "react"
import facebook from "../images/fb.webp"
import insta from "../images/insta.webp"
import twitter from "../images/twitter.webp"

const Footer = () => {
  return (
    <div>
      <footer>
        {/* <div className="social-media">
          <img src={facebook} alt="facebook icon" width="70" />
          <img src={insta} alt="instagram icon" width="70" />
          <img src={twitter} alt="twitter icon" width="70" />
        </div> */}
        <div className="footer-links">
          <a
            style={{ color: "white" }}
            href="https://www.notion.so/Resources-for-LA-Seniors-7b5d40bf627c42e1a9e7d17cdfa99f6f"
            target="_blank"
          >
            <p>Resources</p>
          </a>
          <a
            style={{ color: "white" }}
            href="https://alltogether.typeform.com/to/Fl5Aku"
            target="_blank"
          >
            <p>Volunteer</p>
          </a>
          <a href="/donate">
            <p>Donate</p>
          </a>
        </div>
        <div className="copyright">
          <p>2020 AllTogether LA</p>
        </div>
      </footer>
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .social-media {
            display: flex;
          }
          .social-media img {
            width: 40px;
            height: 40px;
            padding: 0.2rem !important;
          }
        }

        footer {
          height: auto;
          background: #3c3c3c;
          padding: 5rem;
          flex-wrap: wrap;
        }
        .social-media {
          display: flex;
        }
        .social-media img {
          padding: 1.2rem;
        }
        .footer-links {
          font-family: "GT Walsheim Pro Light";
          font-style: normal;
          font-weight: 900;
          font-size: 14px;
          line-height: 23px;
          letter-spacing: 0.03em;
          color: #ffffff;
          padding: 1rem;
        }
        .copyright {
          padding: 1rem;
          color: white;
          font-family: "GT Walsheim Pro Light";
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 20px;
          letter-spacing: 0.03em;

          color: #ffffff;
        }
      `}</style>
    </div>
  )
}

export default Footer
