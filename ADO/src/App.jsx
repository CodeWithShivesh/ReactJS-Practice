import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Homepage from "./Components/Homepage";
// import Question from "./Components/Question";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Homepage></Homepage> 
          <Question></Question>
      */}
    </>
  );
}

export default App;
