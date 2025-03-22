import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriterComp({ strings = [] }) {
  return (
    <div style={{ position: "absolute" }}>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          delay: 30,
        }}
      />
    </div>
  );
}

export default TypeWriterComp;
