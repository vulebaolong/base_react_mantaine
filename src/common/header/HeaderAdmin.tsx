import { ActionIcon, Box, Drawer, rem, Stack, useMantineColorScheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconMenu } from "@tabler/icons-react";
import { HEIGHT_HEADER, WIDTH_NAV } from "../constants/app.constant";
import { BREAK_POINT_LG } from "../constants/setting.constant";
import { Logo } from "../logo/Logo";
import { NavAdmin } from "../nav/nav-admin/NavAdmin";
import ButtonToggleTheme from "../button/button-toggle-theme/ButtonToggleTheme";

export default function HeaderAdmin() {
   const isMobile = useMediaQuery(`(max-width: ${BREAK_POINT_LG})`);
   const { colorScheme } = useMantineColorScheme();
   const [opened, { open, close }] = useDisclosure(false);

   return (
      <>
         <Box
            style={{
               display: `flex`,
               alignItems: `center`,
               justifyContent: `space-between`,
               padding: `8px 16px`,
               height: HEIGHT_HEADER,
               position: `fixed`,
               zIndex: `2`,
               top: `0`,
               right: `0`,
               width: !isMobile ? `calc(100vw - ${WIDTH_NAV})` : `100vw`,
               borderBottom: `1px solid ${
                  colorScheme === "dark"
                     ? `var(--mantine-color-dark-4)`
                     : `var(--mantine-color-gray-3)`
               }`,
               backdropFilter: `blur(10px)`,
            }}
            component={`header`}
         >
            {/* LEFT */}
            {isMobile ? (
               <ActionIcon
                  size={42}
                  variant="default"
                  onClick={() => {
                     console.log(123);
                     open();
                  }}
               >
                  <IconMenu />
               </ActionIcon>
            ) : (
               <Box />
            )}

            {/* CENTER */}
            {isMobile ? <Logo /> : <Box />}

            {/* RIGHT */}
            <Stack style={{ alignItems: `center`, gap: `10px` }}>
               <ButtonToggleTheme />
            </Stack>
         </Box>
         <Drawer
            opened={opened}
            onClose={close}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            withCloseButton={false}
            size={`xs`}
            styles={{
               body: {
                  padding: 0,
               },
            }}
         >
            <NavAdmin />
            {/* abc */}
         </Drawer>
      </>
   );
}
