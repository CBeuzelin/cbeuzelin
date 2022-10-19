import React from "react";
import { FormattedMessage } from "react-intl";

import MainCategory from "../common/components/mainCategory";
import { ERoutes } from "../../shared/enums/routes.enum";

function Presentation() {
  return (
    <MainCategory id={ERoutes.PRESENTATION} isMain={false}>
      <FormattedMessage id="presentation" />
    </MainCategory>
  );
}

export default Presentation;
