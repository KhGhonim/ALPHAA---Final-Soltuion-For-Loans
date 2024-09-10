import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/Pages/Home/Home.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import AboutUs from "../src/Pages/AboutUs/AboutUs.jsx";
import Services from "../src/Pages/Services/Services.jsx";
import FAQ from "../src/Pages/FAQ/FAQ.jsx";
import HomeLoanPage from "./Pages/Services/HOME LOAN/HomeLoanPage.jsx";
import FirstHomeBuyerPage from "./Pages/Services/FirstHomeBuyerPage/FirstHomeBuyerPage.jsx";
import RefinancingPage from "./Pages/Services/RefinancingPage/RefinancingPage.jsx";
import CommercialLoanPage from "./Pages/Services/CommercialLoanPage/CommercialLoanPage.jsx";
import AssetFinancePage from "./Pages/Services/AssetFinancePage/AssetFinancePage.jsx";
import PersonalLoanPage from "./Pages/Services/PersonalLoanPage/PersonalLoanPage.jsx";
import SmsfLendingPage from "./Pages/Services/SmsfLendingPage/SmsfLendingPage.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/HOME-LOAN" element={<HomeLoanPage />} />
      <Route path="/FIRST-HOME-BUYER" element={<FirstHomeBuyerPage />} />
      <Route path="/REFINANCING" element={<RefinancingPage />} />
      <Route path="/COMMERCIAL-LOAN" element={<CommercialLoanPage />} />
      <Route path="/ASSET-FINANCE" element={<AssetFinancePage />} />
      <Route path="/PERSONAL-LOAN" element={<PersonalLoanPage />} />
      <Route
        path="/SELF-MANAGED-SUPER-FUND-(SMSF)-LENDING"
        element={<SmsfLendingPage />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
