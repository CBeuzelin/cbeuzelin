import "./styles.scss";

import React, { ReactNode, useContext, useEffect, useState } from "react";
import { ERoutes } from "../../../../shared/enums/routes.enum";
import AppContext from "../../../../contexts/app.context";

interface IProps {
  children: ReactNode;
  className?: string;
}

function getOffsetHeights(): number[] {
  return Object.values(ERoutes)
    .map((route, index) => {
      const routeElement = document.querySelector(`#${route}`);
      if (routeElement) {
        return index * window.innerHeight;
      }

      return 0;
    })
    .sort((a, b) => b - a);
}

function getVisibleSection(scrollHeight: number, scrollTop: number): ERoutes {
  const offsetHeights = getOffsetHeights();

  let index = offsetHeights.findIndex((height) => {
    const middle = height + window.innerHeight / 2;
    return middle >= scrollTop && middle < scrollTop + window.innerHeight;
  });

  const route = Object.values(ERoutes).find(
    (route, i) => i === offsetHeights.length - 1 - index
  );

  return route ?? ERoutes.PRESENTATION;
}

function CustomScrollbar(props: IProps) {
  const [scrollBarStyle, setScrollBarStyle] = useState({});

  const { setVisibleSection } = useContext(AppContext);

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
          setScrollBarStyle({ transform: `scale(1,${newProgressHeight})` });

          setVisibleSection(
            getVisibleSection(
              scrollContainer.scrollHeight,
              scrollContainer.scrollTop
            )
          );
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

        setVisibleSection(
          getVisibleSection(
            scrollContainer.scrollHeight,
            scrollContainer.scrollTop
          )
        );

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
}

export default CustomScrollbar;
