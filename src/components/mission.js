import React from "react"
import logo from "../images/logo.png"

const Mission = () => {
  return (
    <div>
      <div className="section_2" id="mission">
        <img src={logo} width="179px" height="179px" />
        <h2>Our Mission</h2>
        <p>
          We aim to connect neighbors in need with neighbors who can help. Our
          mission is simple, but important: Protect the well-being of our
          vulnerable neighbors, particularly seniors. Through our work during
          COVID-19, we hope to facilitate long-lasting relationships and build a
          greater sense of community.
        </p>
        <span className="artwork">ARTWORK CREATED BY JIM “TAZ” EVANS</span>
        <div id="video">
          <iframe
            src="https://abc7.com/video/embed/?pid=6200231"
            marginwidth="0"
            marginheight="0"
            hspace="0"
            vspace="0"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <style jsx>
        {`
          .section_2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 151px;
            padding-left: 5rem;
            padding-right: 5rem;
            justify-content: center;
          }
          .section_2 img {
            width: 200px;
            margin: 0 auto;
          }
          .section_2 h2 {
            width: 321px;
            height: 21px;
            margin: 0 auto;
            margin-top: 11px;
            font-family: "Space Grotesk";
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 163.92%;
            text-align: center;
            letter-spacing: 0.03em;
            color: #252424;
          }
          .section_2 p {
            max-width: 60rem;
            height: 83px;
            font-family: "GT Walsheim Pro Light";
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.03em;
            color: #515151;
            margin: 0 auto;
            margin-top: 72px;
          }
          .artwork {
            font-family: "GT Walsheim Pro Light";
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.03em;
            color: #515151;
            margin: 0 auto;
            margin-top: 49px;
          }
          iframe {
            margin: 0 auto;

            margin-top: 53px;
          }
          #video {
            position: relative;
            padding-bottom: 55.25%; /* 16:9 */
            height: 0;
            display: flex;
            justify-content: center;
            padding-right: 0 !important;
          }
          #video iframe {
            position: absolute;
            top: 0;
            width: 70%;
            height: 70%;
            justify-self: center;
            vertical-align: middle;
            align-self: center;
          }
          @media screen and (max-width: 768px) {
            .section_2 p {
              width: 100%;
              height: auto;
            }
            .section_2 {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Mission
