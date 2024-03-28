
type ColorObject = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  darkbackground?: string;
};

const defaultTheme: ColorObject = {
  primary: "red",
  secondary: "#ffffff",
  accent: "#ff0000",
  background: "#f0f0f0",
};

export const darkTheme: ColorObject = {
  primary: "red",
  secondary: "#ffffff",
  accent: "#ff0000",
  background: "red",
};


const fetchColorsFromAPI = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
    );
    const data = await response.json();
    console.log(data);

    if (data && data.theme) {
      // Extract theme colors from the API response
      const colors = {
        primary: data.theme["--primary"],
        secondary: data.theme["--foreground"], // Assuming foreground color as secondary
        accent: data.theme["--primary-foreground"], // Assuming primary foreground color as accent
        background: data.theme["--background"],
      };

      // Assign theme colors to defaultTheme object
      Object.assign(defaultTheme, colors);
    }
  } catch (error) {
    console.error("Failed to fetch colors from API:", error);
  }
};

const initializeTheme = async (): Promise<void> => {
  try {
    await fetchColorsFromAPI();
  } catch (error) {
    console.error("Failed to initialize theme:", error);
  }
};

initializeTheme();

export default defaultTheme;
