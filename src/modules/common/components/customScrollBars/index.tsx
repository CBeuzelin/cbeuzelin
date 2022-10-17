import "./styles.scss";

import React, { ReactNode, useEffect, useState } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const CustomScrollBars = (props: IProps) => {
  const [scrollBarStyle, setScrollBarStyle] = useState({});

  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll-container");
    const scrollBarContainer = document.querySelector("#scrollbar-container");
    const scrollBar = document.querySelector("#scrollbar");

    if (scrollContainer && scrollBarContainer && scrollBar) {
      scrollContainer.addEventListener(
        "scroll",
        () => {
          const totalPageHeight =
            scrollContainer.scrollHeight - window.innerHeight;
          const newProgressHeight = scrollContainer.scrollTop / totalPageHeight;
          setScrollBarStyle({
            transform: `scale(1,${newProgressHeight})`,
            opacity: `${newProgressHeight}`,
          });
        },
        {
          capture: true,
          passive: true,
        }
      );

      scrollBarContainer.addEventListener("click", (e) => {
        const totalPageHeight =
          scrollContainer.scrollHeight - window.innerHeight;
        const newPageScroll =
          ((e as MouseEvent).clientY / scrollBarContainer.clientHeight) *
          totalPageHeight;

        scrollContainer.scrollTo({
          top: newPageScroll,
          behavior: "smooth",
        });
      });

      window.addEventListener("resize", () => {
        const totalPageHeight =
          scrollContainer.scrollHeight - window.innerHeight;
        const newProgressHeight = scrollContainer.scrollTop / totalPageHeight;

        setScrollBarStyle({
          transform: `scale(1,${newProgressHeight})`,
          opacity: `${newProgressHeight}`,
        });
      });
    }
  }, []);

  return (
    <div id="scroll-container" className={props.className ?? ""}>
      <div id="scrollbar-container">
        <div id="scrollbar" style={scrollBarStyle} />
      </div>

      {props.children}
    </div>
  );
};

export default CustomScrollBars;
