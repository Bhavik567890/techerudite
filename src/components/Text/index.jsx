import React from "react";

const sizeClasses = {
  txtMuliBold47: "font-bold font-mulish",
  txtMuliBold22: "font-bold font-mulish",
  txtMuliSemiBold28: "font-mulish font-semibold",
  txtMuliSemiBold16: "font-mulish font-semibold",
  txtMuliRegular16Gray70001: "font-mulish font-normal",
  txtMuliBold22CyanA400: "font-bold font-mulish",
  txtMuliSemiBold15: "font-mulish font-semibold",
  txtMuliSemiBold13: "font-mulish font-semibold",
  txtMuliBold22IndigoA400: "font-bold font-mulish",
  txtMuliRegular20: "font-mulish font-normal",
  txtMuliRegular18Gray700: "font-mulish font-normal",
  txtMuliRegular12: "font-mulish font-normal",
  txtMuliRegular14: "font-mulish font-normal",
  txtMuliRegular15: "font-mulish font-normal",
  txtMuliRegular16: "font-mulish font-normal",
  txtMuliRegular18: "font-mulish font-normal",
  txtMuliBold18: "font-bold font-mulish",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
