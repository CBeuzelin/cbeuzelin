import { createContext } from "react";

import { ELocale } from "../shared/enums/locale.enum";
import { ETheme } from "../shared/enums/theme.enum";
import { ERoutes } from "../shared/enums/routes.enum";

const AppContext = createContext({
  locale: ELocale.FR,
  setLocale: (locale: ELocale) => {},

  theme: ETheme.DARK,
  setTheme: (theme: ETheme) => {},

  visibleSection: ERoutes.PRESENTATION,
  setVisibleSection: (route: ERoutes) => {},
});

export default AppContext;
