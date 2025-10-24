import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home";
import Contributors from "../pages/Contributors";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/*" element={<PublicRoutes />}>
          <Route index element={<Home />} />
          {/* <Route path="/contributors" element={<Contributors />} />  */}
          {/* Exemple : <Route path="/login" element={<Login />} /> */}
        </Route>

        {/* Routes privées */}
        <Route path="/dashboard/*" element={<PrivateRoutes />}>
          {/* Exemple : <Route index element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;