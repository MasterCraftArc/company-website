import { navigate } from "gatsby";
import * as React from "react";

const trainedCardStyle = {
height: '386px',
backgroundColor: "#F3F3F3",
};

const trainedCardBody = {
  fontSize: "16px",
  width: "87%",
  paddingTop: "2%",
  marginTop: "auto",
  marginBottom: "4%",
  color: "rgba(0, 0, 0, 0.74)"
};

const trainedCardTitle = {
  fontWeight: "400",
  color: "#154A8F",
  paddingTop: "4%",
  fontSize: "18px"
};

const trainedCardDate = {
  color: "rgba(0, 0, 0, 0.6)",
  fontSize: "12px",

}

const textStyle = {

}

const copyButton = React.createRef()

const copyTimeout = () => {
  copyButton.current.className = "bi bi-check-lg absolute right-10 bottom-5 text-2xl text-lime-700"
  setTimeout(() => copyButton.current.className = "bi bi-box-arrow-up absolute right-10 bottom-5 text-2xl cursor-pointer hover:text-blue-600", 3000)
}

const copyToClipboard = (str) => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
  //https://raptis.wtf/blog/gatsby-mdx-copy-code-button-with-confetti/
}


const Card = React.forwardRef((props, ref) => (
  <div className="relative">
    <div
      role="none"
      ref={ref}
      className="borderRadius card rounded-2xl mt-10 sm:mx-5 shadow-xl border-1 border-gray-100 border-solid overflow-hidden flex flex-col justify-between"
      style={trainedCardStyle}
      data-category={props.category}
      onClick={() => {
        navigate(props.cardLink);
      }}
      onKeyDown={() => {
        navigate(props.cardLink);
      }}
    >
      <div className="h-2/5 bg-gray-50 w-full flex justify-center items-center">
        <img
          src={props.imgDisplay}
          className="card-img-top mx-auto object-cover py-4"
          alt="blogpost thumbnail"
        />
      </div>
      <div className="h-1/2 card-body text-center relative"
      style={textStyle}>
        <h3
          className="card-title mt-2 mb-3 tracking-wide text-left ml-8"
          style={trainedCardTitle}
        >
          {props.title}
        </h3>
        <h4 className="sm:mt-2 sm:mb-3 text-left ml-8 text-sm text-gray-500" style={trainedCardDate}>{props.date} · {props.length} min read</h4>
        <p
          className="card-text text-sm text-gray-500 text-left ml-8 md:mt-5"
          style={trainedCardBody}
        >
          {props.description}
        </p>
      </div>
    </div>
        <i 
          role="none"
          className="bi bi-box-arrow-up absolute right-10 bottom-5 text-2xl cursor-pointer hover:text-blue-600"
          onClick={() => {
            copyToClipboard("defenseunicorns.com" + props.cardLink)
            copyTimeout()
          }}
          ref={copyButton}
          onKeyDown={() => {
            navigate(props.cardLink);
          }}
        >
        </i>

  </div>
));

export default Card;
