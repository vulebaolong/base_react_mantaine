import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import adminRouter from "./adminRouter";
import clientRouter from "./clientRouter";
import ClientLayout from "../layouts/client/ClientLayout";

const rootRouter = createBrowserRouter([
   {
      path: "*",
      element: <ClientLayout />,
      children: clientRouter,
   },
   {
      path: "admin",
      element: <AdminLayout />,
      children: adminRouter,
   },
]);

export default rootRouter;
