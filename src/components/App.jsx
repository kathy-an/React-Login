import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return <div className="container">
  {/* { currentTime > 12 ? <h1> Go </h1> : null } */}
{ isLoggedIn  ? <h1>Hello</h1> : <Login />  }
  </div>
}

export default App;
