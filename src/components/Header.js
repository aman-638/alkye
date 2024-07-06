import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-8 pt-12  flex justify-between items-center">
      <img src={`images/LogoWhite.svg`} alt={`logo`} className="logo" />
    </header>
  );
};

export default Header;
