import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ProviderRedux } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "../../store/store";
import { theme } from "./mantaine/theme.maintaine";

export default function Provider({ children }: { children: ReactNode }) {
   return (
      <ProviderRedux store={store}>
         <MantineProvider theme={theme} defaultColorScheme="dark">
            <HelmetProvider>
               {children}
               <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover
                  theme="dark"
               />
            </HelmetProvider>
         </MantineProvider>
      </ProviderRedux>
   );
}
