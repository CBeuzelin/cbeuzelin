import "./styles.scss";

import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";

import AppContext from "../../contexts/app.context";
import { ELocale } from "../common/enums/locale.enum";
import { ETheme } from "../common/enums/theme.enum";

function Header() {
  const { locale, setLocale, theme, setTheme } = useContext(AppContext);

  function onLocaleChange() {
    setLocale(locale === ELocale.FR ? ELocale.EN : ELocale.FR);
  }

  function onThemeChange() {
    setTheme(theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK);
  }

  function getLanguage() {
    return locale === ELocale.FR ? (
      <FormattedMessage id="fr" />
    ) : (
      <FormattedMessage id="en" />
    );
  }

  return (
    <header className="theme-main-container theme-border">
      <FormattedMessage id="hello" />

      <button onClick={onLocaleChange}>{getLanguage()}</button>
      <button onClick={onThemeChange}>{theme}</button>
    </header>
  );
}

export default Header;
