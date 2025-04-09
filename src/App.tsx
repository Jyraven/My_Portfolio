import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';
import ThemeToggle from './components/ThemeToggle';
import TechWatch from './components/TechWatch';
import ProjectDetail from './pages/ProjectDetail';
import TechArticle from './pages/TechArticle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    if (!localStorage.theme) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <main className="font-inter bg-cream dark:bg-gray-900 transition-colors duration-300">
            <ThemeToggle />
            <FloatingNav />
            <Header />
            <About />
            <Skills />
            <Projects />
            <TechWatch />
            <Contact />
            <Footer />
          </main>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/techwatch/:id" element={<TechArticle />} />
      </Routes>
    </Router>
  );
}

export default App;