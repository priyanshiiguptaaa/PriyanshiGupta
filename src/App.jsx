// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Layout from './components/Layout';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About';
import Achievements from './components/Achievements/Achievements';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

const Home = () => (
  <>
    <Hero />
  </>
);

const NotFound = () => (
  <div className="min-h-screen pt-20 px-4">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
