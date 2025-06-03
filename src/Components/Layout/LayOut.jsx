import React from "react";
import Header from "../Header/Header";

function LayOut({ children }) {
  // Destructure 'children' here
  return (
    <div>
      <Header />
      {children} {/* Render the children here */}
    </div>
  );
}

export default LayOut;
