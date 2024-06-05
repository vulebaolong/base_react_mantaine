import { ROUTER_ADMIN } from "../common/constants/router.constant";
import NotFound from "../common/notifications/NotFound";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Login from "../pages/admin/login/Login";
import Product from "../pages/admin/Product";
import User from "../pages/admin/user/User";
import RootPage from "../pages/RootPage";

const adminRouter = [
   {
      path: "",
      element: (
         <RootPage title="Dashboard">
            <Dashboard />
         </RootPage>
      ),
   },
   {
      path: ROUTER_ADMIN.LOGIN(),
      element: (
         <RootPage title="Login">
            <Login />
         </RootPage>
      ),
   },
   {
      path: ROUTER_ADMIN.USER(),
      element: (
         <RootPage title="User">
            <User />
         </RootPage>
      ),
   },
   {
      path: ROUTER_ADMIN.PRODUCT(),
      element: (
         <RootPage title="Product">
            <Product />
         </RootPage>
      ),
   },
   {
      path: "*",
      element: (
         <RootPage title="Not Found">
            <NotFound />
         </RootPage>
      ),
   },
];

export default adminRouter;
