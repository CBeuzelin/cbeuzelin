import React from "react";
import { FormattedMessage } from "react-intl";

import MainCategory from "../common/components/mainCategory";
import { ERoutes } from "../../shared/enums/routes.enum";

function Pricing() {
  return (
    <MainCategory id={ERoutes.PRICING} isMain={true}>
      <FormattedMessage id="pricing" />
    </MainCategory>
  );
}

export default Pricing;
