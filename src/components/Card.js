import React from "react";

const Card = (props) => {
  return (
    <div
      className={`sm:w-4/5 sm:max-w-3xl bg-white mx-auto text-black my-6 rounded-xl p-2 ${props.contactStyle}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
