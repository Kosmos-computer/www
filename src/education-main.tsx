import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EducationPage from "./EducationPage";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EducationPage />
  </StrictMode>,
);
