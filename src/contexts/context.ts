import { createContext } from "react";

import { ELocale } from "../shared/enums/locale.enum";
import { ETheme } from "../shared/enums/theme.enum";
import { ERoutes } from "../shared/enums/routes.enum";
import { EScreenType } from "../shared/enums/screen-type.enum";

const AppContext = createContext({
  locale: ELocale.FR,
  setLocale: (locale: ELocale) => {},

  theme: ETheme.DARK,
  setTheme: (theme: ETheme) => {},

  visibleSection: ERoutes.PRESENTATION,
  setVisibleSection: (route: ERoutes) => {},

  screenType: EScreenType.COMPUTER,
  setScreenType: (route: EScreenType) => {},
});

export default AppContext;
