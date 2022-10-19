import "./styles.scss";

import React, { ReactNode } from "react";

interface IProps {
  id: string;
  isMain: boolean;
  children: ReactNode;
}

function MainCategory(props: IProps) {
  return (
    <div
      id={props.id}
      className={`main-category transition ${
        props.isMain ? " theme-main-container" : " theme-secondary-container"
      }`}
    >
      {props.children}
    </div>
  );
}

export default MainCategory;
