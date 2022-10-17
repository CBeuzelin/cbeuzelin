import "./App.scss";

import React, { useEffect, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";

import Header from "./modules/header";
import AppContext from "./contexts/app.context";
import { ELocale } from "./modules/common/enums/locale.enum";
import { ETheme } from "./modules/common/enums/theme.enum";
import Presentation from "./modules/presentation";
import Products from "./modules/products";
import Prestations from "./modules/prestations";
import CustomScrollBars from "./modules/common/components/customScrollBars";

const messagesFr = require("./translations/fr.json");
const messagesEn = require("./translations/en.json");

function App() {
  const [locale, setLocale] = useState(ELocale.FR);
  const [theme, setTheme] = useState(ETheme.DARK);
  const context = useMemo(
    () => ({ locale, setLocale, theme, setTheme }),
    [locale, theme]
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

          <CustomScrollBars className="page-content">
            <Presentation />
            <Products />
            <Prestations />
          </CustomScrollBars>
        </div>
      </IntlProvider>
    </AppContext.Provider>
  );
}

export default App;
