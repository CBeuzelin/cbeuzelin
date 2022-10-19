import React from "react";
import { FormattedMessage } from "react-intl";

import MainCategory from "../common/components/mainCategory";
import { ERoutes } from "../../shared/enums/routes.enum";

function Prestations() {
  return (
    <MainCategory id={ERoutes.PRESTATIONS} isMain={false}>
      <FormattedMessage id="prestations" />
    </MainCategory>
  );
}

export default Prestations;
