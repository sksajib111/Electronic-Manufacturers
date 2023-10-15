import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const useUsers = () => {
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    fetch(`https://evening-ridge-50687.herokuapp.com/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data), setIsLoad(false));
  }, [user, isLoad]);

  return [users, setUsers, isLoad, setIsLoad];
};

export default useUsers;
