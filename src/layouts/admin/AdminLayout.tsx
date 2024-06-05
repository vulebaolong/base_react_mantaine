import { Outlet, useLocation } from "react-router-dom";
import { HEIGHT_HEADER } from "../../common/constants/app.constant";
import { Box } from "@mantine/core";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import { NavAdmin } from "../../common/nav/nav-admin/NavAdmin";
import { useMediaQuery } from "@mantine/hooks";
import { BREAK_POINT_LG } from "../../common/constants/setting.constant";
import { ROUTER_ADMIN } from "../../common/constants/router.constant";

export default function AdminLayout() {
   const { pathname } = useLocation();
   const isMobile = useMediaQuery(`(max-width: ${BREAK_POINT_LG})`);

   if ([ROUTER_ADMIN.LOGIN()].includes(pathname)) {
      return (
         <Box style={{ width: "100vw", height: "100vh" }}>
            <Outlet />
         </Box>
      );
   }
   return (
      <Box
         style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
            gridTemplateRows: "1fr",
         }}
      >
         {!isMobile && <NavAdmin />}

         <div
            style={{
               padding: `calc(${HEIGHT_HEADER} + 20px) 20px 20px`,
               width: `100%`,
               height: `100%`,
               overflowY: `auto`,
            }}
         >
            <Outlet />
         </div>

         <HeaderAdmin />
      </Box>
   );
}
