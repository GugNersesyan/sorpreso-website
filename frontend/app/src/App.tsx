import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import "./App.css";

// Placeholder page components
const HomePage = () => (
  <div style={{ padding: "2rem" }}>
    <h2>Welcome to Sorpreso!</h2>
    <p>This is the home page.</p>
  </div>
);

const MenuPage = () => (
  <div style={{ padding: "2rem" }}>
    <h2>Menu</h2>
    <p>Browse our delicious menu items here.</p>
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
        <main style={{ marginTop: "90px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
