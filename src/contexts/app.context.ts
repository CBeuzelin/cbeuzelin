import { createContext } from "react";

import { ELocale } from "../modules/common/enums/locale.enum";
import { ETheme } from "../modules/common/enums/theme.enum";

const AppContext = createContext({
  locale: ELocale.FR,
  setLocale: (locale: ELocale) => {},

  theme: ETheme.DARK,
  setTheme: (theme: ETheme) => {},
});

export default AppContext;
