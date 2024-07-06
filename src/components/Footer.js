import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 md:p-12 md:mx-60">
      <div className="flex flex-start space-x-8 mt-8 md:mt-0">
        <img src={`images/facebook.svg`} alt={`logo`} className="logo" />
        <img src={`images/instagram.svg`} alt={`logo`} className="logo" />
        <img src={`images/twitter.svg`} alt={`logo`} className="logo" />
        <img src={`images/twitch.svg`} alt={`logo`} className="logo" />
        <img src={`images/youtube.svg`} alt={`logo`} className="logo" />
      </div>
      <div className="">
        <div className="flex flex-start flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 my-8 ml-3">
          <div className="text-xl md:text-2xl font-semibold cursor-pointer">
            Privacy Policy
          </div>
          <div className="text-xl md:text-2xl font-semibold cursor-pointer">
            Contact Us
          </div>
          <div className="text-xl md:text-2xl font-semibold cursor-pointer">
            Cookie Preferences
          </div>
          <div className="text-xl md:text-2xl font-semibold cursor-pointer">
            Corporate Information
          </div>
        </div>
        <div className="flex flex-start flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 my-8 ml-3">
          <div className="text-xl md:text-2xl font-semibold cursor-pointer">
            Privacy Policy
          </div>
          <div className="text-xl md:text-2xl font-semibold cursor-pointer">
            Contact Us
          </div>
          <div className="text-xl md:text-2xl font-semibold cursor-pointer">
            Cookie Preferences
          </div>
          <div className="text-xl md:text-2xl font-semibold cursor-pointer">
            Corporate Information
          </div>
        </div>
      </div>
      <div className="flex flex-start ml-3 text-xl">© Alkye Test</div>
    </footer>
  );
};

export default Footer;
