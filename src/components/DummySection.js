import React from "react";

import Container from "./Container";

const DummySection = ({ title, id, background }) => (
  <section id={id}>
    <Container>
      <div style={{ height: "100vh", backgroundColor: background }}>
        <h2
          className="title"
          style={{
            textAlign: "center",
            color: "#fff",
            lineHeight: "100vh",
            marginBottom: 0
          }}
        >
          {title}
        </h2>
      </div>
    </Container>
  </section>
);

export default DummySection;
