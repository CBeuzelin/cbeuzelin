import "./styles.scss";
import frFlag from "../../../shared/images/france.png";
import ukFlag from "../../../shared/images/united-kingdom.png";

import React, { useContext, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FormattedMessage } from "react-intl";

import AppContext from "../../../contexts/app.context";
import { ELocale } from "../../../shared/enums/locale.enum";
import { ETheme } from "../../../shared/enums/theme.enum";
import { ERoutes } from "../../../shared/enums/routes.enum";
import { DarkModeIcon, LightModeIcon } from "../../../shared/icons";

function Header() {
  const { locale, setLocale, theme, setTheme, visibleSection } =
    useContext(AppContext);

  useEffect(() => {
    const element = document.querySelector(window.location.hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  function onLocaleChange() {
    setLocale(locale === ELocale.FR ? ELocale.EN : ELocale.FR);
  }

  function onThemeChange() {
    setTheme(theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK);
  }

  function getLanguageClass() {
    return locale === ELocale.FR ? "fr-flag" : "uk-flag";
  }

  function getTab(route: ERoutes, label: JSX.Element) {
    return (
      <HashLink
        className={`tab transition ${visibleSection === route ? "active" : ""}`}
        to={`/#${route}`}
        smooth={true}
      >
        <span>{label}</span>
      </HashLink>
    );
  }

  return (
    <header className="transition">
      <nav>
        {getTab(ERoutes.PRESENTATION, <FormattedMessage id="presentation" />)}
        {getTab(ERoutes.PRODUCTS, <FormattedMessage id="products" />)}
        {getTab(ERoutes.PRESTATIONS, <FormattedMessage id="prestations" />)}
        {getTab(ERoutes.PRICING, <FormattedMessage id="pricing" />)}
        {getTab(ERoutes.PORTFOLIO, <FormattedMessage id="portfolio" />)}
        {getTab(ERoutes.CONTACT, <FormattedMessage id="contact" />)}
      </nav>

      <div className="buttons-container">
        <button
          id="language-button"
          className={`img-button transition ${getLanguageClass()}`}
          type="button"
          aria-label={getLanguageClass()}
          onClick={onLocaleChange}
        >
          <div className="img-container">
            <img src={frFlag} alt="fr-flag" />
            <img src={ukFlag} alt="uk-flag" />
          </div>
        </button>

        <button
          id="theme-button"
          className="img-button transition"
          type="button"
          aria-label={theme}
          onClick={onThemeChange}
        >
          <div className="icon-container">
            <DarkModeIcon className="transition" />
            <LightModeIcon className="transition" />
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
