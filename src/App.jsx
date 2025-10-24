import React from "react";
import AppRouter from "./routes/AppRouter";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

const App = () => {
  return (
    <DarkModeProvider>
      <AppRouter />
    </DarkModeProvider>
  );
};

export default App;
