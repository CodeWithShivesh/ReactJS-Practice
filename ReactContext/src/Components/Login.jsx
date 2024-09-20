import { useContext, useState } from "react";
import UserContext from "../Store/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`username: ${userName}  password: ${password}`);

    setUser(userName, password);
  };

  return (
    <div className="loginBox">
      <label htmlFor="userName">Username: </label>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
          // console.log(e.target.value);
        }}
        placeholder="Username"
      />
      <label htmlFor="Password">Password: </label>
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          // console.log(e.target.value);
        }}
        placeholder="Password"
      />
      <button type="submit" onClick={handleSubmit} className="button">
        Submit
      </button>
    </div>
  );
};

export default Login;
