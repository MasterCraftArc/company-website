import Box from "@mui/material/Box";
import React, { useState } from "react";
import useResize from "../../../hooks/onResize";
import { hideSmall } from "../../../utilities/display";
import ZarfBubbles from "../../../assets/png/zarf-bubbles.png";

function ZarfBox(props) {
  const [zarfTop, setZarfTop] = useState();
  const [zarfLeft, setZarfLeft] = useState();
  const selfRef = React.useRef();

  const setPosition = () => {
    const laCurrent = props.leftAlignRef.current;
    if (laCurrent && selfRef.current) {
      const laRect = laCurrent.getBoundingClientRect();
      setZarfLeft(laRect.left - document.body.getBoundingClientRect().left);
      setZarfTop(laCurrent.scrollTop + laRect.height);
    }
  };

  useResize(setPosition);

  return (
    <Box
      ref={selfRef}
      component="img"
      src={ZarfBubbles}
      alt="Zarf a light blue and purple axolotle"
      sx={{
        ...hideSmall,
        width: "262px",
        height: "260px",
        position: "absolute",
        top: zarfTop,
        left: zarfLeft,
        zIndex: 1,
      }}
    />
  );
}

export default ZarfBox;
