import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Donate() {
  return (
    <div>
      <Header />
      <div className="iats-container">
        <script
          type="text/javascript"
          src="https://www.iatspayments.com/AURA/AURA.aspx?PID=PADFFB4D54233ECC98"
        ></script>
        <div className="disclaimer">
          <p>
            Charitable Incubator, Inc. serves as the fiscal sponsor of
            AllTogether LA. Charitable Incubator, Inc. is a registered 501(c)(3)
            nonprofit organization.
          </p>
          <p>
            All donations made through this website are tax deductible. Federal
            Identification Number: 46-3016720.
          </p>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .iats-container {
            margin: 100px 15px 25px 15px;
          }
          @media only screen and (min-width: 767px) {
            .iats-container {
              margin: 150px 15px 25px 15px;
            }
          }
          :global(.IATS_Div) {
            margin: auto !important;
            max-width: 650px;
          }
          .disclaimer {
            margin: 25px auto;
            padding: 0px 15px;
            font-size: 0.8em;
            color: #8c8c8c;
            max-width: 650px;
          }
        `}
      </style>
    </div>
  )
}
