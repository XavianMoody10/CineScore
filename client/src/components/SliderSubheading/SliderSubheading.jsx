import React from "react";
import { Link } from "react-router-dom";

export const SliderSubheading = ({ heading, viewAllPath }) => {
  return (
    <div className=" flex justify-between">
      <h2 className=" text-white text-xl font-extrabold sm:text-3xl">
        Trending Movies
      </h2>

      {viewAllPath && (
        <Link
          to={viewAllPath}
          className=" text-white text-xl font-extrabold border-b-2 border-black pb-2 hover:border-white duration-150"
        >
          View All
        </Link>
      )}
    </div>
  );
};
