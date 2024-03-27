type ColorObject = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
};

const defaultTheme: ColorObject = {
  primary: "blue",
  secondary: "#ffffff",
  accent: "#ff0000",
  background: "#f0f0f0",
};

// Define a function to fetch the colors from the API
async function fetchColorsFromAPI(): Promise<ColorObject> {
  try {
    // Make the API request to fetch the colors
    const response = await fetch("https://api.example.com/colors");
    const data = await response.json();

    // Return the color object from the API response
    return data.colors;
  } catch (error) {
    console.error("Failed to fetch colors from API:", error);
    return defaultTheme;
  }
}

async function initializeTheme(): Promise<void> {
  try {
    const colors = await fetchColorsFromAPI();
    Object.assign(defaultTheme, colors);
  } catch (error) {
    console.error("Failed to initialize theme:", error);
  }
}

initializeTheme();

export default defaultTheme;
