import React from "react";
import { motion, AnimatePresence } from "motion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const LoadingOverlay = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          className=" absolute top-0 left-0 bottom-0 right-0 bg-[#121212] flex items-center justify-center z-30"
        >
          <ClipLoader color="white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
