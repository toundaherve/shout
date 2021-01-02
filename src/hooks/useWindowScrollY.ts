import React, { useEffect } from "react";

const useWindowScrollY = (cb: (scrollY: number) => void) => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const y = window.scrollY;
      cb(y);
    });
  });
};

export default useWindowScrollY;
