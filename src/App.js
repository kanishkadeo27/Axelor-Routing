import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Admin from "./components/Admin";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./components/Auth";
import Home from "./components/Home";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="home" element={<Home />} />
              <Route
                path="about"
                element={
                  <React.Suspense fallback="loading....">
                    <LazyAbout />
                  </React.Suspense>
                }
              />
              <Route path="contact" element={<Contact />} />
              <Route
                path="profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
