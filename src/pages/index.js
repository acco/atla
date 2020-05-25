import React from "react"
import "../styles/style.css"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"
import Mission from "../components/mission"
import Resources from "../components/resources"
import Contact from "../components/contact"
import Operations from "../components/operations"
import HelpUs from "../components/help_us"
import About from "../components/about"
import Stories from "../components/stories"
import Press from "../components/press"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <Resources />
      <Contact />
      <Operations />
      <HelpUs />
      <About />
      <Stories />
      <Press />
      <Footer />
    </div>
  )
}
