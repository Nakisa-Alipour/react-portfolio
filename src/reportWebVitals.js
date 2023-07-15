// Define the reportWebVitals function
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is a function
    if (onPerfEntry && onPerfEntry instanceof Function) {
      // Dynamically import the web-vitals module
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Call the web-vitals functions with onPerfEntry callback
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };
  
  // Export the reportWebVitals function as the default export
  export default reportWebVitals;