import { Box, Loader } from "@mantine/core";
import { ReactNode, forwardRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";
import { getAccessToken } from "../api/auth";
import PleaseLogin from "../common/notifications/PleaseLogin";

interface PageProps {
   children: ReactNode;
   title?: string;
   meta?: ReactNode;
   protect?: boolean;
}

const RootPage = forwardRef<HTMLDivElement, PageProps>(
   ({ children, title = "", meta, protect = false, ...other }, ref) => {
      const { id } = useParams();
      const location = useLocation();
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
         if (protect) {
            setIsLoading(true);
         }
      }, [location]);

      const rederContent = () => {
         // const isNavigateIfLogin = () => {
         //    if ([ROUTER_ADMIN.LOGIN].includes(location.pathname.slice(1))) return true;

         //    return false;
         // };

         // if (isNavigateIfLogin()) {
         //    if (getAccessToken()) {
         //       return <Navigate to={`/${ROUTES.MIRACLE_SEEDS}`} replace />;
         //    }
         // }

         if (!protect) return children;

         if (isLoading)
            return (
               <Box style={{ width: "fit-content", margin: "20% auto 0" }}>
                  <Loader color="blue" />
               </Box>
            );
         if (getAccessToken()) return children;

         return <PleaseLogin />;
      };

      return (
         <>
            <Helmet>
               <title>{`Visual | ${title} ${id ? "- " + id : ""}`}</title>
               {meta}
            </Helmet>

            <Box
               style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  height: `100%`,
               }}
               ref={ref}
               {...other}
            >
               {rederContent()}
            </Box>
         </>
      );
   }
);

export default RootPage;
