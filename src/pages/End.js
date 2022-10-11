import React, { useState } from "react";
import { AnimationShine } from "../elements/Animation";
import FormModal from "../elements/FormModal";
import background from "../static/images/endBackground.png";
import bubble1 from "../static/images/endBubble1.png";
import bubble2 from "../static/images/endBubble2.png";
import Chat from "./home/Chat";

const End = () => {
  const [next, setNext] = useState(0);
  const [isOpen, setOpen] = useState(false);
  if (next == 0) {
    setTimeout(() => {
      setNext(next + 1);
    }, 2800);
  }

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img src={background} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />

      {next == 0 && <AnimationShine src={bubble1} style={{ width: "60%", left: "20%", top: "13%" }} />}

      {next == 1 && (
        <>
          <AnimationShine src={bubble2} style={{ width: "60%", left: "20%", top: "13%" }} />
          <Chat position="absolute" top="0" left="7.5%">
            이제 리워드를 받을 수 있어!
          </Chat>
          {setTimeout(() => {
            setOpen(true);
          }, 3000)}
          <FormModal setOpen={setOpen} isOpen={isOpen} setNext={setNext} />
        </>
      )}
    </div>
  );
};

export default End;
