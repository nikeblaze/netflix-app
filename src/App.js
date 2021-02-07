import "./App.css";
import NetflixMain from "./NetflixMain/NetflixMain";
import { BrowserRouter as Router } from "react-router-dom";
import ShowService from "./Services/showService";

function App() {
  return (
    <Router>
      <NetflixMain />
    </Router>
    // <ShowService />
  );
}

export default App;
