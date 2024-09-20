import { useContext } from "react";
import UserContext from "../Store/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h3>Please LogIn!!</h3>;

  return <h3>Welcome {user}</h3>;
};

export default Profile;
