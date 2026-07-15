import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";

import { TopBar } from "./components/layout/TopBar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { PopupContact } from "./components/ui/PopupContact";
import { WhatsAppWidget } from "./components/ui/WhatsAppWidget";

import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { BlogsPage } from "./pages/BlogsPage";
import { BlogDetailsPage } from "./pages/BlogDetailsPage";
import { Contact } from "./pages/Contact";
import { ServicePage } from "./pages/ServicePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-[#111827]">
      <ScrollToTop />
      <TopBar />
      <Header />
      <PopupContact />
      <WhatsAppWidget />
      <main className="page-shell overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/contact" element={<Contact variant="full" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
