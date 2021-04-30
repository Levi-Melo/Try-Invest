import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/contex";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
