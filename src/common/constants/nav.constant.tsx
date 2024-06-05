import { IconGauge, IconNotes } from "@tabler/icons-react";
import { ROUTER_ADMIN } from "./router.constant";

export const LIST_NAV = [
   {
      label: "Dashboard",
      icon: IconGauge,
      link: ROUTER_ADMIN.HOME(),
   },
   {
      label: "User",
      icon: IconGauge,
      link: ROUTER_ADMIN.USER(),
   },
   {
      label: "Market news",
      icon: IconNotes,
      initiallyOpened: true,
      childrens: [
         { label: "Overview", link: ROUTER_ADMIN.USER() },
         { label: "Forecasts", link: "/" },
         { label: "Outlook", link: "/" },
         { label: "Real time", link: "/" },
      ],
   },
];
