import React from "react";
import ReactDOM from "react-dom";
import CallToAction from "./components/Sections/CallToAction";
import Hero from "./components/Sections/Hero";
import Features from "./components/Sections/Features";
import Footer from "./components/Sections/Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hero bgColor="#111417" />
      <Features bgColor="#1C1F21" />
      <CallToAction bgColor="#FF4242" />
      <Footer bgColor="#111417" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
