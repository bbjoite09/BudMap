import React, { useState } from "react";
import { AnimationShine } from "../elements/Animation";
import FormModal from "../elements/FormModal";
import background from "../static/images/endBackground.png";
import bubble1 from "../static/images/endBubble1.png";
import bubble2 from "../static/images/endBubble2.png";

const End = () => {
  const [next, setNext] = useState(0);
  const [isOpen, setOpen] = useState(false);
  if (next == 0) {
    setTimeout(() => {
      setNext(next + 1);
    }, 3000);
  }
  return (
    <div style={{ position: "relative" }}>
      <img src={background} style={{ width: "100%", height: "120%" }} />
      {next == 0 && <AnimationShine src={bubble1} style={{ width: "60%", left: "20%", top: "13%" }} />}
      {next == 1 && (
        <>
          <img src={bubble2} style={{ position: "absolute", width: "60%", left: "20%", top: "13%" }} />
          {setTimeout(() => {
            setOpen(true);
          }, 2000)}
          <FormModal setOpen={setOpen} isOpen={isOpen} />;
        </>
      )}
    </div>
  );
};

export default End;
