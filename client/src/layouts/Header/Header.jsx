import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { NavigationContext } from "../../context/NavigationContext";

export const Header = () => {
  const { isNavigationOpen, setIsNavigationOpen } =
    useContext(NavigationContext);

  return (
    <header className=" fixed top-0 w-full p-4 z-10">
      <div className=" flex items-center justify-between bg-white max-w-[1600px] mx-auto py-2 px-2 rounded-sm">
        <div className=" ml-2">
          <img src={logo} alt="" width={150} />
        </div>

        <Hamburger
          size={25}
          toggle={setIsNavigationOpen}
          toggled={isNavigationOpen}
        />
      </div>
    </header>
  );
};
