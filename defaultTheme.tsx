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

const fetchColorsFromAPI = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
    );
    const data = await response.json();

    if (data && data.theme) {
      const colors = {
        primary: data.theme["--primary"],
        secondary: data.theme["--foreground"],
        accent: data.theme["--primary-foreground"],
        background: data.theme["--background"],
      };

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
