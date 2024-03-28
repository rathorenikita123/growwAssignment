import React, { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Fetch theme data from the API
    fetch('https://example.com/theme-data')
      .then(response => response.json())
      .then(data => {
        // Set the theme data received from the API
        setTheme(data.theme);
      })
      .catch(error => {
        console.error('Error fetching theme data:', error);
      });
  }, []); // Runs once on component mount

  // Apply theme to the document's root element
  useEffect(() => {
    if (theme) {
      Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  }, [theme]);

  return (
    <div className="App">
      {/* Your application content */}
    </div>
  );
}

export default App;