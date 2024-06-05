import { Box, ScrollArea, UnstyledButton, rem, useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconLogout } from "@tabler/icons-react";
import { logout } from "../../../api/auth";
import { effectText } from "../../../helpers/function.helper";
import { HEIGHT_HEADER, WIDTH_NAV } from "../../constants/app.constant";
import { LIST_NAV } from "../../constants/nav.constant";
import { BREAK_POINT_LG } from "../../constants/setting.constant";
import { Logo } from "../../logo/Logo";
import classes from "./NavAdmin.module.css";
import { LinksGroup } from "./nav-linksgroup/NavLinksGroup";

export function NavAdmin() {
   const { colorScheme } = useMantineColorScheme();
   const isMobile = useMediaQuery(`(max-width: ${BREAK_POINT_LG})`);

   const handleClickLogout = () => {
      logout(`admin`);
   };

   return (
      <Box
         // className={classes.navbar}
         style={() => {
            return {
               backgroundColor:
                  colorScheme === "dark"
                     ? `var(--mantine-color-dark-6)`
                     : `var(--mantine-color-white)`,

               borderRight:
                  colorScheme === "dark"
                     ? `1px solid var(--mantine-color-dark-4)`
                     : `1px solid var(--mantine-color-gray-3)`,
               height: `100vh`,
               width: isMobile ? `100%` : WIDTH_NAV,
               padding: `0 var(--mantine-spacing-md) 0`,
               display: `flex`,
               flexDirection: `column`,
            };
         }}
         component="nav"
      >
         <div className={classes.header} style={{ height: HEIGHT_HEADER }}>
            <Logo />
         </div>

         <ScrollArea className={classes.links}>
            <div className={classes.linksInner}>
               {LIST_NAV.map((item) => {
                  return <LinksGroup {...item} key={item.label} />;
               })}
            </div>
         </ScrollArea>

         <div className={classes.footer}>
            <UnstyledButton className={classes.linkFooter} onClick={handleClickLogout}>
               <IconLogout className={classes.linkIcon} stroke={1.5} />
               <span>{effectText("Logout")}</span>
            </UnstyledButton>
         </div>
      </Box>
   );
}
