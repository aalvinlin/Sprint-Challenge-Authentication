import React, {useState} from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Errors from "./components/Errors";

const App = () => {

  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
  <>
    <Login errorMessages={errorMessages} setErrorMessages={setErrorMessages} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Signup errorMessages={errorMessages} setErrorMessages={setErrorMessages} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Errors errorMessages={errorMessages} setErrorMessages={setErrorMessages} />
  </>
);

}

export default App;