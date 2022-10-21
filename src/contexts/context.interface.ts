import { Dispatch, SetStateAction } from "react";

import { ELocale } from "../shared/enums/locale.enum";
import { ETheme } from "../shared/enums/theme.enum";
import { ERoutes } from "../shared/enums/routes.enum";
import { EScreenType } from "../shared/enums/screen-type.enum";

export interface IAppContext {
  locale: ELocale;
  setLocale: Dispatch<SetStateAction<ELocale>>;

  theme: ETheme;
  setTheme: Dispatch<SetStateAction<ETheme>>;

  visibleSection: ERoutes;
  setVisibleSection: Dispatch<SetStateAction<ERoutes>>;

  screenType: EScreenType;
  setScreenType: Dispatch<SetStateAction<EScreenType>>;
}
