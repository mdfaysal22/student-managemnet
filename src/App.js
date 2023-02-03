import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import { router } from "./Router/Router";
import theme from "./Theme/theme";

function App() {
  return (
    <AuthContext>
      <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <StyledEngineProvider></StyledEngineProvider>
      </RouterProvider>
    </ThemeProvider>
    </AuthContext>
  );
}

export default App;
