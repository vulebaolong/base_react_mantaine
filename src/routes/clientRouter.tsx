import NotFound from "../common/notifications/NotFound";
import Home from "../pages/client/Home";
import RootPage from "../pages/RootPage";

const clientRouter = [
   {
      path: "",
      element: (
         <RootPage title="Home">
            <Home />
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

export default clientRouter;
