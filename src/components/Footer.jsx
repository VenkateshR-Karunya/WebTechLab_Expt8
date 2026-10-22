import React from "react";

// Reusable footer shown on every page
function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} The Green Thumb Journal · Happy gardening 🌱</p>
    </footer>
  );
}

export default Footer;
