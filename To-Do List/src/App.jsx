import AppHeading from "./components/AppHeading";
import FirstRow from "./components/FirstRow";
import SecondRow from "./components/SecondRow";
import ThirdRow from "./components/ThirdRow";
import "./App.css";

function App() {
  return (
    <center className="To-do-container">
      {/*       self closing tag */}
      <AppHeading />
      <FirstRow></FirstRow>

      <SecondRow></SecondRow>
      <ThirdRow></ThirdRow>
    </center>
  );
}

export default App;
