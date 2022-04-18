import { navigate } from "gatsby";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

const trainedCardStyle = {
  height: "386px",
  backgroundColor: "#F3F3F3",
};

const trainedCardBody = {
  fontSize: "16px",
  width: "87%",
  paddingTop: "2%",
  marginTop: "auto",
  marginBottom: "4%",
  color: "rgba(0, 0, 0, 0.74)",
  lineHeight: "24px",
};

const trainedCardTitle = {
  fontWeight: "500",
  color: "#154A8F",
  paddingTop: "4%",
  fontSize: "18px",
};

const trainedCardDate = {
  color: "rgba(0, 0, 0, 0.6)",
  fontSize: "12px",
};

const textStyle = {};

const copyTimeout = (copyButton) => {
  copyButton.current.className =
    "bi bi-check-lg absolute right-10 bottom-5 text-3xl text-lime-700";
  setTimeout(
    () =>
      (copyButton.current.className =
        "bi bi-box-arrow-up absolute right-10 bottom-5 text-3xl cursor-pointer hover:text-blue-600"),
    3000
  );
};

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  //https://raptis.wtf/blog/gatsby-mdx-copy-code-button-with-confetti/
};

const Card = React.forwardRef((props, ref) => {
  const copyButton = React.createRef();

  return (
    <div className="relative">
      <div
        role="none"
        ref={ref}
        className="borderRadius card rounded-lg mt-10 sm:mx-5 shadow-xl border-1 border-gray-100 border-solid overflow-hidden flex flex-col justify-between"
        style={trainedCardStyle}
        data-category={props.category}
        onClick={() => {
          navigate(props.cardLink);
        }}
        onKeyDown={() => {
          navigate(props.cardLink);
        }}
      >
        <div
          className="h-1/2 bg-gray-50 w-full flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${props.imgDisplay})` }}
        ></div>

        <div className="h-1/2 card-body text-center relative" style={textStyle}>
          <h3
            className="card-title mt-2 mb-3 tracking-wide text-left ml-8"
            style={trainedCardTitle}
          >
            {props.title}
          </h3>
          <h4
            className="sm:mt-2 sm:mb-3 text-left ml-8 text-sm text-gray-500"
            style={trainedCardDate}
          >
            {props.date} · {props.readTime}
          </h4>
          <p
            className="card-text text-sm text-gray-500 text-left ml-8 md:mt-5"
            style={trainedCardBody}
          >
            {props.description.substring(0, 56)} ...
          </p>
        </div>
      </div>
      <Tooltip title="Copy Link">
        <i
          key={props.cardLink}
          role="none"
          className="bi bi-box-arrow-up absolute right-12 bottom-7 text-3xl cursor-pointer hover:text-blue-600"
          onClick={() => {
            copyToClipboard("defenseunicorns.com" + props.cardLink);
            copyTimeout(copyButton);
          }}
          ref={copyButton}
          onKeyDown={() => {
            copyToClipboard("defenseunicorns.com" + props.cardLink);
            copyTimeout(copyButton);
          }}
        ></i>
      </Tooltip>
    </div>
  );
});

export default Card;
