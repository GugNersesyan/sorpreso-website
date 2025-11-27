import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Contacts } from "./components/Contacts/Contacts";
import "./App.css";
import MenuPage from "./components/Menu/MenuPage.tsx";
import MenuCategoryPage from "./components/Menu/MenuCategoryPage/MenuCategoryPage";

// Placeholder page components
const HomePage = () => (
  <div style={{ padding: "2rem" }}>
    <h2>Welcome to Sorpreso!</h2>
    <p>This is the home page.</p>
  </div>
);

const NewsPage = () => (
  <div style={{ padding: "2rem" }}>
    <h2>News</h2>
    <p>Stay updated with the latest news and updates.</p>
  </div>
);

const AboutPage = () => (
  <div style={{ padding: "2rem" }}>
    <h2>About Us</h2>
    <p>Learn more about Sorpreso and our story.</p>
  </div>
);

const ContactPage = () => (
  <div style={{ padding: "2rem" }}>
    <h2>Contact</h2>
    <p>Get in touch with us.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/menu" element={<MenuPage />}>
              {/* Редирект по умолчанию на matcha */}
              <Route index element={<Navigate to="matcha" replace />} />
              <Route path=":category" element={<MenuCategoryPage />} />
            </Route>

            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Contacts />
      </div>
    </BrowserRouter>
  );
}

export default App;
