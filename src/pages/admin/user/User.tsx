import { Box, Button, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import DrawerUserCreate from "../../../common/drawers/DrawerUserCreate";
import TableTantask from "./table-tanstack/TableTantask";

export default function User() {
   const [
      openDrawerUserCreate,
      { open: handleOpenDrawerUserCreate, close: handleCloseDrawerUserCreate },
   ] = useDisclosure(false);

   return (
      <>
         <Stack
            style={{
               flexDirection: `column`,
               height: `100%`,
               justifyContent: `space-between`,
               gap: `20px`,
            }}
         >
            <Stack
               style={{
                  width: `100%`,
                  alignItems: `center`,
                  justifyContent: `space-between`,
               }}
            >
               <Title order={1}>User list</Title>
               <Button onClick={handleOpenDrawerUserCreate}>Create user</Button>
            </Stack>
            <Box style={{ flex: `1`, height: `calc(100% - 100px)` }}>
               <TableTantask />
            </Box>
         </Stack>
         <DrawerUserCreate
            handleCloseDrawerUserCreate={handleCloseDrawerUserCreate}
            openDrawerUserCreate={openDrawerUserCreate}
         />
      </>
   );
}
