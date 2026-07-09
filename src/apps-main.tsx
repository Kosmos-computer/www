import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppsPage from "./AppsPage";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppsPage />
  </StrictMode>,
);
