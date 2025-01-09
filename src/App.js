import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import './index.css';
import MainContent from "./components/MainContent";

const App = () => {
  console.log("Hello World");
  return(
    <div>
      <Header />
      
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
