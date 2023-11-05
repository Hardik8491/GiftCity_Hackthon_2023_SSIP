import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white m-6 border shadow-md bottom-0">
      <div className="container mx-auto py-8 px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="https://www.giftgujarat.in/assets/common/vectors/logo-dark.svg" alt="Logo" className="w-24 md:w-32" />
            <div className="text-sm text-gray-600 text-center md:text-left">
              © 2023 GIFT City - All intellectual property rights reserved
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex flex-col md:flex-row space-x-2">
                <a
                  href="#"
                  className="text-blue-600 hover:underline p-2 border rounded-full">
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:underline p-2 border rounded-full">
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:underline p-2 border rounded-full">
                  Youtube
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:underline p-2 border rounded-full">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="list-none flex flex-col items-center md:items-start gap-2 ">
            <h2 className="text-center md:text-left">ABOUT</h2>
            <li>BUSINESS</li>
            <li>UPDATES</li>
            <li>CONTACT</li>
            <li>PRIVACY</li>
          </div>
          <div className="list-none flex flex-col items-center md:items-start gap-2">
            <h2 className="text-center md:text-left">DOWNLOADS</h2>
            <li>RIGHT TO INFORMATION</li>
            <li>ODAS</li>
            <li>CAREER</li>
            <li>ACCREDITATION</li>
            <li>USEFUL LINKS</li>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-col gap-2">
              <span className="text-center md:text-left">KEEP ME UPDATED</span>
              <p className="text-xs max-w-sm text-center md:text-left">
                I want to stay up to date with the latest developments and exciting news on how we are shaping the future!
              </p>
              <div className="border-b-2 mt-2 md:mt-4">
                <input
                  type="email"
                  placeholder="your email"
                  required
                  className="bg-transparent border-none ring-offset-white ring-offset-0 w-full p-2"
                />
                <button className="border-none bg-transparent">SIGN UP</button>
              </div>
              <div className="flex flex-row items-center mt-2 md:mt-4">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="text-xs text-gray-500">
                  I consent to share my information with GIFT City
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between py-5 border-t mt-4 md:mt-10">
          <div className="text-center md:text-left md:w-1/4">
            +91-9099700247
          </div>
          <span className="text-orange-600 font-semibold text-base text-center md:text-left md:w-1/2">
            query@giftgujarat.in | 079-61708300 | 1800 120 1300
          </span>
          <div className="md:w-1/4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
