// Import the necessary modules and components
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

// Define the PortfolioContainer component
export default function PortfolioContainer() {
  // State variable to keep track of the current page
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <p>Page not found</p>;
  };

  // Handler function to change the current page
  const handlePageChange = (page) => setCurrentPage(page);
  
  // Render the components and pass the necessary props
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
      {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
