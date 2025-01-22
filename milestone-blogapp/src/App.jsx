import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#454F5B",
      },
      secondary: {
        main: "#454F5B",
        second: "#161C24",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
