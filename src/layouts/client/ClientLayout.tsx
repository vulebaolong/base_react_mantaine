import { Outlet } from "react-router-dom";

export default function ClientLayout() {
   return (
      <>
         header
         <Outlet />
         footer
      </>
   );
}
