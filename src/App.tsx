import "./App.scss";

import React, { useMemo, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { IntlProvider } from "react-intl";

import Header from "./modules/header/components";
import AppContext from "./contexts/app.context";
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

const messagesFr = require("./translations/fr.json");
const messagesEn = require("./translations/en.json");

function App() {
  const [locale, setLocale] = useState(ELocale.FR);
  const [theme, setTheme] = useState(ETheme.DARK);
  const [visibleSection, setVisibleSection] = useState(ERoutes.PRESENTATION);

  const context = useMemo(
    () => ({
      locale,
      setLocale,

      theme,
      setTheme,

      visibleSection,
      setVisibleSection,
    }),
    [locale, theme, visibleSection]
  );

  function getMessagesByLang() {
    return locale === ELocale.EN ? messagesEn : messagesFr;
  }

  return (
    <AppContext.Provider value={context}>
      <IntlProvider
        locale={locale}
        defaultLocale={locale}
        messages={getMessagesByLang()}
      >
        <div id="app" className={theme}>
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
              Back to top
            </HashLink>
          </div>
        </div>
      </IntlProvider>
    </AppContext.Provider>
  );
}

export default App;
