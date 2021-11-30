import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./Constants/routes";

const Login = lazy(() => import("./Pages/login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
