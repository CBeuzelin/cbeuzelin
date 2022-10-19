import React from "react";
import { FormattedMessage } from "react-intl";

import MainCategory from "../common/components/mainCategory";
import { ERoutes } from "../../shared/enums/routes.enum";

function Portfolio() {
  return (
    <MainCategory id={ERoutes.PORTFOLIO} isMain={false}>
      <FormattedMessage id="portfolio" />
    </MainCategory>
  );
}

export default Portfolio;
