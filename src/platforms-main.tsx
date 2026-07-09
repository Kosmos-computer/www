import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PlatformsPage from "./PlatformsPage";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlatformsPage />
  </StrictMode>,
);
