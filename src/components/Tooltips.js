import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Tooltips = ({ text, children }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      className="relative w-[320px] justify-center flex items-center px-[15px] py-[10px] bg-[#D4D4D4] hover:bg-[#ECECEC] transition ease-in-out duration-150 rounded-lg cursor-pointer"
      style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
    >
      {children}
      {hoverState && (
        <p
          className="absolute right-[-185px] top-[50%] -translate-y-1/2 z-10 w-[200px] p-[10px] bg-white rounded-lg"
          style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
        >
          {text}
        </p>
      )}
      <FontAwesomeIcon
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        className="w-[15px] absolute right-[15px]"
        icon={faCircleInfo}
      />
    </div>
  );
};

export default Tooltips;
