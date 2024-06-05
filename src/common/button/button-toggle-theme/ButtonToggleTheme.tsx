import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ButtonToggleTheme.module.css";

export default function ButtonToggleTheme() {
   const { toggleColorScheme } = useMantineColorScheme();

   return (
      <ActionIcon
         onClick={toggleColorScheme}
         variant="default"
         size="xl"
         aria-label="Toggle color scheme"
      >
         <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
         <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
   );
}
