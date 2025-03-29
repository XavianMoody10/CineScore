import React, { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import { Link } from "react-router-dom";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { motion } from "motion/react";

export const SideNavigation = () => {
  const { isNavigationOpen } = useContext(NavigationContext);

  return (
    <motion.aside
      initial={{ x: "-150%" }}
      animate={{ x: isNavigationOpen ? 0 : "-150%" }}
      transition={{ stiffness: 0, duration: 0.2 }}
      className=" fixed left-10 top-24 w-fit h-[600px] bg-white p-2 rounded-sm"
    >
      <nav>
        <ul className=" space-y-3">
          <li>
            <Link
              to={"/"}
              className=" block p-3 rounded-sm hover:bg-black hover:text-white duration-150"
            >
              <TrendingUpOutlinedIcon sx={{ fontSize: 40 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/movies"}
              className=" block p-3 rounded-sm hover:bg-black hover:text-white duration-150"
            >
              <LocalMoviesOutlinedIcon sx={{ fontSize: 40 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/tv_shows"}
              className=" block p-3 rounded-sm hover:bg-black hover:text-white duration-150"
            >
              <LiveTvOutlinedIcon sx={{ fontSize: 40 }} />
            </Link>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};
