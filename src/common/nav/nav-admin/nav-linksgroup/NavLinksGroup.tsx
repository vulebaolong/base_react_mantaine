import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { effectText } from "../../../../helpers/function.helper";
import rootRouter from "../../../../routes/rootRouter";
import classes from "./NavLinksGroup.module.css";

interface LinksGroupProps {
   icon: React.FC<any>;
   label: string;
   initiallyOpened?: boolean;
   childrens?: { label: string; link: string }[];
   link?: string;
}

export function LinksGroup({
   icon: Icon,
   label,
   initiallyOpened,
   childrens,
   link,
}: LinksGroupProps) {
   const { pathname } = useLocation();
   const hasLinks = Array.isArray(childrens);
   const [opened, setOpened] = useState(initiallyOpened || false);

   const handleClickLink = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      link: string
   ) => {
      event.preventDefault();
      rootRouter.navigate(link);
   };
   const items = (hasLinks ? childrens : []).map((link) => {
      return (
         <Text
            component="a"
            className={classes.link}
            data-active={link.link === pathname || undefined}
            key={link.label}
            onClick={(e) => {
               handleClickLink(e, link.link);
            }}
         >
            {effectText(link.label)}
         </Text>
      );
   });

   const handleDataActiveForButton = () => {
      if (link) {
         return link === pathname || undefined;
      } else {
         return undefined;
      }
   };

   return (
      <>
         <UnstyledButton
            onClick={() => {
               if (link) {
                  rootRouter.navigate(link);
               } else {
                  setOpened((o) => !o);
               }
            }}
            className={classes.control}
            data-active={handleDataActiveForButton()}
         >
            <Group justify="space-between" gap={0}>
               <Box style={{ display: "flex", alignItems: "center" }}>
                  <ThemeIcon variant="light" size={30}>
                     <Icon style={{ width: rem(18), height: rem(18) }} />
                  </ThemeIcon>
                  <Box ml="md">{effectText(label)}</Box>
               </Box>
               {hasLinks && (
                  <IconChevronRight
                     className={classes.chevron}
                     stroke={1.5}
                     style={{
                        width: rem(16),
                        height: rem(16),
                        transform: opened ? "rotate(-90deg)" : "none",
                     }}
                  />
               )}
            </Group>
         </UnstyledButton>
         {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
      </>
   );
}
