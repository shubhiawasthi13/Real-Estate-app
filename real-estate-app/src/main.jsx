// index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/home";
import Buy from "./pages/buy.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import { AuthProvider } from "./services/context/AuthContext.jsx";
import ProtectedRoute from "./services/context/ProtectedRoute.jsx";
import PropertyList from "./pages/propertyList.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* App layout with Navbar, Footer */}
          <Route path="/" element={<App />}>
            {/* Nested routes rendered in <Outlet /> */}
            <Route index element={<Home />} />

            <Route
              path="buy"
              element={
                <ProtectedRoute>
                  <Buy />
                </ProtectedRoute>
              }
            />
            <Route path="propertyList" element={<PropertyList />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
