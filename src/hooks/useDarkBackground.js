import { useEffect } from "react";
import palette from "../theme/palette";

function useDarkBackground() {
  useEffect(() => {
    document.body.style.background = palette.background.paper;
    return () => {
      document.body.style.background = "white";
    };
  }, []);
}

export default useDarkBackground;
