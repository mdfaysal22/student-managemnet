import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import theme from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <StyledEngineProvider></StyledEngineProvider>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
