import "./App.css";
import Header from "./components/Header/Header";
import Defifnitions from "./components/Definitions/Defifnitions";
import { Container } from "@mui/material";

function App() {
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c53", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header />
        <Defifnitions />
      </Container>
    </div>
  );
}

export default App;
