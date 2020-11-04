import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import DummySection from "./components/DummySection";
import useFixed from "./hooks/useFixed";

const dummyData = [
  {
    id: "portfolio",
    title: "Portfolio",
    background: "#E01931"
  },
  {
    id: "contacts",
    title: "Contact",
    background: "#FC6042"
  }
];

const App = () => {
  const { isFixed, element } = useFixed();
  return (
    <div className="page">
      <Header fixed={isFixed} />
      <Hero element={element} />
      <About />
      {dummyData.map((item, idx) => (
        <DummySection key={idx} {...item} />
      ))}
    </div>
  );
};

export default App;
