import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="home-background" />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
