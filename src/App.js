import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Box sx={{backgroundColor:"white",minHeight:"100vh"}}>
        <Box>
        <BrowserRouter>
          <AppRoutes />
          </BrowserRouter>
          </Box>
      </Box>
    </>
  );
}

export default App;
