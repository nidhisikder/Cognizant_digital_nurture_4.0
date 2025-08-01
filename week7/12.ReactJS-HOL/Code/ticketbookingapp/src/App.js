import React, { useState } from 'react';
import Guest from './components/Guest';
import User from './components/User';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  let displayPage;
  if (isLoggedIn) {
    displayPage = <User />;
  } else {
    displayPage = <Guest />;
  }
  return (
    <div>
      {displayPage}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
export default App;
