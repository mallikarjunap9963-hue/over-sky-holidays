import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { TopBar } from "./components/layout/TopBar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { PopupContact } from "./components/ui/PopupContact";
import { BlogsPage } from "./pages/BlogsPage";

function Layout() {
  return (
    <div className="min-h-screen bg-transparent text-[#111827]">
      <TopBar />
      <Header />
      <PopupContact />
      <main className="page-shell overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={<BlogsPage />} />
      </Route>
    </Routes>
  );
}
