import "./styles.scss";
import frFlag from "../../../shared/images/france.png";
import ukFlag from "../../../shared/images/united-kingdom.png";

import React, { useContext, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

import AppContext from "../../../contexts/app.context";
import { ELocale } from "../../../shared/enums/locale.enum";
import { ETheme } from "../../../shared/enums/theme.enum";
import { ERoutes } from "../../../shared/enums/routes.enum";
import { DarkModeIcon, LightModeIcon } from "../../../shared/icons";

function Header() {
  const { locale, setLocale, theme, setTheme, visibleSection } =
    useContext(AppContext);

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
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
    const isActive = visibleSection === route;
    return (
      <div key={`${route}-tab`}>
        <HashLink
          id={`${route}-tab`}
          className={`tab transition ${isActive ? "active" : ""}`}
          to={`/#${route}`}
          smooth={true}
        >
          <span>{label}</span>
        </HashLink>

        {isActive && (
          <motion.div
            layoutId="underline"
            id="underline"
            transition={{ ease: "linear", duration: 0.1 }}
          />
        )}
      </div>
    );
  }

  return (
    <header className="transition">
      <div className="nav-container">
        <nav>
          {Object.values(ERoutes).map((route) =>
            getTab(route, <FormattedMessage id={route} />)
          )}
        </nav>
      </div>

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
