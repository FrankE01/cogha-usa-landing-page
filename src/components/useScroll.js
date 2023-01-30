import { useState, useEffect } from "react";

export function useScroll() {
  const [doc, setdoc] = useState();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    doc?.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset?.top);
  const [scrollX, setScrollX] = useState(bodyOffset?.left);
  const [scrollDirection, setScrollDirection] = useState();

  useEffect(() => {
    const listener = (e) => {
      setBodyOffset(doc?.body.getBoundingClientRect());
      setScrollY(-bodyOffset?.top);
      setScrollX(bodyOffset?.left);
      setScrollDirection(lastScrollTop > -bodyOffset?.top ? "down" : "up");
      setLastScrollTop(-bodyOffset?.top);
    };
    window.addEventListener("scroll", listener);
    if (typeof document !== undefined) {
      setdoc(document);
    }

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [doc, bodyOffset, lastScrollTop]);

  return {
    scrollX,
    scrollY,
    scrollDirection,
  };
}
