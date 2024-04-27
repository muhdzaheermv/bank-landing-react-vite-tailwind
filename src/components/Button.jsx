import React from "react";
import styles from "../style";

const Button = () => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} mt-10 rounded-[10px] `}
    >
      Get started
    </button>
  );
};

export default Button;
