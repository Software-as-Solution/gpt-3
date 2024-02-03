import {
  Footer,
  Blog,
  Possibility,
  Features,
  About,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import React from "react";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient-bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <About />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;
