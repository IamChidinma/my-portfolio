import React from "react";

export default function Footer() {
  const style = {
    backgroundColor: "#231F20",
    color: "#FEF7F2",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <footer style={style}>
      <p>© {new Date().getFullYear()} Amaechi Chidinma. All Rights Reserved.</p>
    </footer>
  );
}
