import "./App.scss";
const messagesFr = require("./translations/fr.json");
const messagesEn = require("./translations/en.json");

import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FormattedMessage, IntlProvider } from "react-intl";

import Header from "./modules/header/components";
import AppContext from "./contexts/context";
import { ELocale } from "./shared/enums/locale.enum";
import { ETheme } from "./shared/enums/theme.enum";
import Presentation from "./modules/presentation";
import Products from "./modules/products";
import Prestations from "./modules/prestations";
import CustomScrollbar from "./modules/common/components/customScrollbar";
import Pricing from "./modules/pricing";
import Portfolio from "./modules/portfolio";
import Contact from "./modules/contact";
import { ERoutes } from "./shared/enums/routes.enum";
import { EScreenSize, EScreenType } from "./shared/enums/screen-type.enum";
import { IAppContext } from "./contexts/context.interface";

function getScreenType() {
  const windowWidth = window.innerWidth;
  if (windowWidth < EScreenSize.PHONE) return EScreenType.PHONE;
  if (windowWidth < EScreenSize.TABLET) return EScreenType.TABLET;
  return EScreenType.COMPUTER;
}

function App() {
  const [locale, setLocale] = useState(ELocale.FR);
  const [theme, setTheme] = useState(ETheme.DARK);
  const [visibleSection, setVisibleSection] = useState(ERoutes.PRESENTATION);
  const [screenType, setScreenType] = useState(getScreenType());

  const context: IAppContext = {
    locale,
    setLocale,

    theme,
    setTheme,

    visibleSection,
    setVisibleSection,

    screenType,
    setScreenType,
  };

  function getMessagesByLang() {
    return locale === ELocale.EN ? messagesEn : messagesFr;
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenType(getScreenType());
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <AppContext.Provider value={context}>
      <IntlProvider
        locale={locale}
        defaultLocale={locale}
        messages={getMessagesByLang()}
      >
        <div id="app" className={`${theme} ${screenType}`}>
          <Header />

          <CustomScrollbar className="page-content">
            <div id="top" />
            <Presentation />
            <Products />
            <Prestations />
            <Pricing />
            <Portfolio />
            <Contact />
          </CustomScrollbar>

          <div id="back-to-top">
            <HashLink to={`/#top`} smooth={true}>
              <FormattedMessage id="backToTop" />
            </HashLink>
          </div>
        </div>
      </IntlProvider>
    </AppContext.Provider>
  );
}

export default App;
