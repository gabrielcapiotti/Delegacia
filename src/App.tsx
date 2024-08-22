import ThemeDefault from "../src/config/Theme/ThemeDefault";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ThemeDefault>
      <AppRoutes />
    </ThemeDefault>
  );
}

export default App;
