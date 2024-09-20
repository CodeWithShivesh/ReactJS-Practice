import { useState } from "react";
import "./App.css";
import Login from "./Components/login";
import Profile from "./Components/profile";
import UserContext from "./Store/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>Welcome to the React Context API App</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContext.Provider>
  );
}

export default App;
