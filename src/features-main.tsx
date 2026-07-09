import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FeaturesPage from "./FeaturesPage";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeaturesPage />
  </StrictMode>,
);
