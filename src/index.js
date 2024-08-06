import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/globals.scss";
import Index from "./pages/index.jsx";
import Contact from "./pages/contact.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import Team from "./pages/team/index.jsx";
import TeamSlug from "./pages/team/slug";
import OurServices from "./pages/ourServices/index.jsx";
import OurServicesSlug from "./pages/ourServices/slug.jsx";
import Blog from "./pages/blog/index.jsx";
import BlogSlug from "./pages/blog/slug.jsx";
import Layout from "./components/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/hakkimizda" element={<AboutUs />} />
          <Route path="/ortaklarimiz" element={<Team />}></Route>
          <Route path="/ortaklarimiz/:slug" element={<TeamSlug />} />
          <Route path="/hizmetlerimiz" element={<OurServices />}></Route>
          <Route path="/hizmetlerimiz/:slug" element={<OurServicesSlug />} />
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:slug" element={<BlogSlug />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
