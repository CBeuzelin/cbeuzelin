import React from "react";
import { FormattedMessage } from "react-intl";

import MainCategory from "../common/components/mainCategory";
import { ERoutes } from "../../shared/enums/routes.enum";

function Products() {
  return (
    <MainCategory id={ERoutes.PRODUCTS} isMain={true}>
      <FormattedMessage id="products" />
    </MainCategory>
  );
}

export default Products;
