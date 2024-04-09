import { ThemeButton } from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext";

export const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
      <ThemeButton />
      </ThemeProvider>
    </div>
  );
};
