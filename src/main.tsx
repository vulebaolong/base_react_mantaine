import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Provider from "./common/provider/Provider.tsx";
import "react-toastify/dist/ReactToastify.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./common/style/global.css";
import "./common/style/animation.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <Provider>
      <App />
   </Provider>
);
