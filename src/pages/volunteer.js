import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Donate() {
  return (
    <div>
      <Header />
      <div className="form-container">
        <div dangerouslySetInnerHTML={form} />
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

const form = {
  __html: `<div class="typeform-widget" data-url="https://form.typeform.com/to/Fl5Aku?typeform-medium=embed-snippet" data-transparency="100" data-hide-footer="true" style="width: 100%; height: 100vh;"></div> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>`,
}
