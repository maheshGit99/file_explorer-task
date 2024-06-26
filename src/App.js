import "./App.css";
import AppRoutes from "./app-routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/Style.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
