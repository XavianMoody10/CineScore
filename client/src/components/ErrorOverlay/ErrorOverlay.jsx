import React from "react";

export const ErrorOverlay = ({ error }) => {
  return (
    <>
      {error && (
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#121212] border-2 border-white/15 rounded-sm flex items-center justify-center z-20">
          <p className=" text-white text-2xl">{error.message}</p>
        </div>
      )}
    </>
  );
};
