import { useEffect } from "react";

function useResize(listener) {
  useEffect(() => {
    listener();
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [listener]);
}

export default useResize;
