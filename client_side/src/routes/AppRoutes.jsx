import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, PageNotFound } from "../pages/Index";

import ScrollToTop from "../utils/ScrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
