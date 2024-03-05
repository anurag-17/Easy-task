import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import Login from "./Component/auth/sign-in/Login";
import GetStarted from "./Component/auth/get-started/GetStarted";
import Signup from "./Component/auth/sign-up/Signup";
// import { ToastContainer } from 'react-toastify';

// import "react-toastify/dist/ReactToastify.css";
// import ResetPassword from "./Component/ForgotPassword/ResetPassword";
// import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
// import ChangePassword from "./Component/ChangePassword/Index";

import { Button, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e60d1a',
    },
    secondary: {
      main: '#f50057',
    },
  },
});


function App() {

  function PrivateRoute({ path, element }) {

    const isAuthenticated = JSON.parse(sessionStorage.getItem("sessionToken")) !== null;

    return isAuthenticated ? (
      element
    ) : (
      element
      // <Navigate to="/login" />
    );
  }

  return (

    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<GetStarted />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route
            path="/admindashboard"
            element={<PrivateRoute element={<SideMenu />} />}
          />
          <Route
            path="/"
            element={<PrivateRoute element={<SideMenu />} />}
          /> */}

          </Routes>
        </BrowserRouter>
        {/* <Button variant="contained" color="primary">
                Primary Button
            </Button>
            <Button variant="contained" color="secondary">
                Secondary Button
            </Button> */}
        {/* <ToastContainer /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
