import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./styles/index.css";

import ReactQueryProvider from "./providers/react-query-provider.tsx";

const container = document.getElementById("root") as HTMLDivElement;

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter basename="/">
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </BrowserRouter>
);
