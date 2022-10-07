import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import close from "../static/images/modal/close.png";
import RoundButton from "./RoundButton";
import Typography from "./Typography";

const FormModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, setOpen, setNext } = props;

  return (
    <div>
      {isOpen && (
        <>
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100vh",
              top: 0,
              left: 0,
              background: "rgba(40, 40, 40, 0.5)",
              zIndex: 5,
            }}
            onClick={() => {
              setOpen(false);
            }}
          />
          <div
            id="modal"
            style={{
              width: "85%",
              minHeight: "50vh",
              backgroundColor: "white",
              borderRadius: "30px",
              boxShadow: "0px 0px 30px rgba(70, 70, 70, 0.6)",
              position: "absolute",
              top: "17%",
              left: "50%",
              transform: "translate(-50%, 0)",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              overflowX: "hidden",
            }}
          >
            <button
              onClick={() => {
                setNext(2);
                setOpen(false);
              }}
              style={{ border: "none", backgroundColor: "#00ff0000", alignSelf: "flex-end", padding: "5% 5% 0 0" }}
            >
              <img src={close} />
            </button>
            <Typography type="title" margin="0">
              리워드 받기
            </Typography>
            <Typography margin="3% 0 1% 0">
              {"추첨을 통해 총 10분께\n그립톡과 핸드폰 거치대를 드립니다.\n아래 버튼을 눌러 응모해주세요!"}
            </Typography>

            <RoundButton color="#ACDDC0" width="80%" margin="5% 0 6% 0">
              <a
                href="https://docs.google.com/forms/d/1UIqqkE3SjGQ-1jrORNMTmJlFUCVjvTWiqhMOGarAGfY/viewform?edit_requested=true"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                응모하러 가기
              </a>
            </RoundButton>
          </div>
        </>
      )}
    </div>
  );
};

export default FormModal;
