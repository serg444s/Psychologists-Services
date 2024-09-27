import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  function logOut() {
    signOut(auth)
      .then(console.log("Log out ok"))
      .catch((e) => {
        console.error(e);
      });
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div>
      {authUser && (
        <div>
          <p>{authUser.email}</p>
          <button onClick={logOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default AuthDetails;
