import React, { Component } from "react"
import Kayla from "../images/Kayla.png"
import instagram from "../images/instagram.png"

class Stories extends Component {
  render() {
    return (
      <div className="section_8" id="stories">
        <h1>Stories</h1>
        {/* <p>
          Hear directly from the community members we’ve been able to help!{" "}
        </p>
        <div className="reviews">
          <div className="reviews_card">
            <img src={Kayla} />
            <h3>Kayla</h3>
            <h5 style={{ fontStyle: "italic" }}>Santa Monica</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </p>
          </div>
          <div className="reviews_card">
            <img src={Kayla} />
            <h3>Kayla</h3>
            <h5 style={{ fontStyle: "italic" }}>Santa Monica</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </p>
          </div>
          <div className="reviews_card">
            <img src={Kayla} />
            <h3>Kayla</h3>
            <h5 style={{ fontStyle: "italic" }}>Santa Monica</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud{" "}
            </p>
          </div>
        </div> */}
        <div className="update">
          <a href="https://www.instagram.com/alltogetherla/">
            {" "}
            <img
              src={instagram}
              width="30"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <span className="insta-post"> Our Latest Updates on Instagram</span>
          <div className="posts">
            <div className="post_image">
              <iframe
                src="https://www.instagram.com/p/B_0X8JKg9Qp/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
            <div className="post_image">
              <iframe
                src="https://www.instagram.com/p/B_0czeNgXqi/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
            <div className="post_image">
              <iframe
                src="https://www.instagram.com/p/B_030wmAK3I/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
            <div className="post_image">
              {" "}
              <iframe
                src="https://www.instagram.com/p/B_0dZECAOXB/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
            <div className="post_image">
              {" "}
              <iframe
                src="https://www.instagram.com/p/B_3ZlD9AHtz/embed"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                allowtransparency
                width="250"
                height="320"
              ></iframe>{" "}
            </div>
          </div>
        </div>
        <style jsx>{`
          .section_8 {
            background: #3c3c3c;
            margin-top: 110px;
            text-align: center;
            display: flex;
            flex-direction: column;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .reviews {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 50px;
            justify-content: center;
          }
          .reviews_card {
            display: flex;
            flex-direction: column;
            background: #404040;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 11px;
            width: 350px;
            margin: 5px 10px 80px 10px;
            margin-bottom: 80px;
            justify-content: center;
            text-align: center;
          }
          .reviews_card img {
            border-radius: 50%;
            width: 30%;
            display: block;
            margin: auto;
            margin-top: -50px;
          }
          .section_8 h1 {
            font-family: "Space Grotesk";
            font-style: normal;
            font-weight: 900;
            font-size: 36px;
            line-height: 59px;
            letter-spacing: 0.03em;
            color: #ffffff;
            margin-top: 90px;
            margin-bottom: 5px;
          }
          .section_8 p {
            font-weight: 300;
            font-size: 18px;
            font-family: "GT Walsheim Pro Light";
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.03em;
            padding: 2rem;
            color: #ffffff;
          }
          .reviews h3 {
            font-family: "GT Walsheim Pro Light";
            font-weight: 900;
            font-size: 20px;
            line-height: 163.92%;
            padding-top: 2rem;
            letter-spacing: 0.03em;
            color: #ffffff;
          }
          .reviews h5 {
            font-weight: 500;
            font-family: "GT Walsheim Pro Light";
            font-size: 16px;
            line-height: 163.92%;
            letter-spacing: 0.03em;
            color: rgba(255, 255, 255, 0.8);
          }
          .insta-post {
            font-family: "GT Walsheim Pro Light";
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 30px;
            vertical-align: middle;
            text-align: center;
            letter-spacing: 0.03em;

            color: #ffffff;
          }
          .update {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }
          .posts {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: row;
            margin-top: 10px;
            margin-bottom: 30px;
            padding-bottom: 0;
          }
          .post_image {
            margin: 0;
            padding: 0;
          }
          .post_image img {
            width: 250px;
            height: 200px;
          }
          @media screen and (max-width: 768px) {
            .reviews {
              padding: 1rem;
            }
            .reviews_card {
              width: 100%;
            }
            .post_image img {
              width: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Stories
