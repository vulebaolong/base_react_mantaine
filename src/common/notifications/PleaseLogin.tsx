import { Box, Button, Container, Stack, Text } from "@mantine/core";
import rootRouter from "../../routes/rootRouter";
import { ROUTER_ADMIN } from "../constants/router.constant";
import { Logo } from "../logo/Logo";

export default function PleaseLogin() {
   return (
      <Container maw={`--container-size-md`}>
         <Stack
            style={{
               width: "100%",
               alignItems: "center",
               position: "relative",
               paddingTop: "150px",
               paddingBottom: `80px`,
               animation: "fadeInUp 0.5s",
               gap: "20px",
               filter: "drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.2))",
            }}
         >
            <Box>
               <Logo />
            </Box>
            <Stack
               style={{
                  width: "100%",
                  alignItems: "center",
                  position: "relative",
                  animation: "fadeInUp 0.5s ease 300ms forwards",
                  opacity: "0",
               }}
            >
               <Text>PLEASE LOGIN</Text>
               <Text style={{ fontWeight: "400" }}>Please log in to continue using...!</Text>

               <Button
                  style={{ marginTop: "10px", width: "165px" }}
                  onClick={() => {
                     rootRouter.navigate(ROUTER_ADMIN.LOGIN());
                  }}
               >
                  LOGIN / REGISTER
               </Button>
            </Stack>
         </Stack>
      </Container>
   );
}
