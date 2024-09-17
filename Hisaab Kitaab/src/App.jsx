import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./Components/HomePage";
import Container from "./Components/Container";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <Header></Header>
      <div className="mainbox">
        <SideBar></SideBar>
        <Container>
          <div>Hissab Kitaab</div>
          <HomePage></HomePage>
        </Container>
      </div>
    </>
  );
}

export default App;
