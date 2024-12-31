import React from "react";

const ExprerienceItems = ({ pic, children, Experience }) => {
  return (
    <div className="flex">
      <img src={pic} className="h-8" />
      <div className="flex flex-col justify-center items-start">
        <div className="font-bold text-2xl text-gray-900">{children}</div>
        <div className="font-semibold text-gray-600 text-xs">{Experience}</div>
      </div>
    </div>
  );
};

export default ExprerienceItems;
