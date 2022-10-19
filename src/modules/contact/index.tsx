import React from "react";
import { FormattedMessage } from "react-intl";

import MainCategory from "../common/components/mainCategory";
import { ERoutes } from "../../shared/enums/routes.enum";

function Contact() {
  return (
    <MainCategory id={ERoutes.CONTACT} isMain={true}>
      <FormattedMessage id="contact" />
    </MainCategory>
  );
}

export default Contact;
