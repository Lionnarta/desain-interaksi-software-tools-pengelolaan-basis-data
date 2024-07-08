import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Tooltips = ({ text }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      {hoverState && (
        <p
          className="absolute left-[20px] top-[50%] -translate-y-1/2 z-10 w-[200px] p-[10px] bg-white rounded-lg"
          style={{ boxShadow: "0px 5px 50px 5px rgba(0, 0, 0, 0.05)" }}
        >
          {text}
        </p>
      )}
      <FontAwesomeIcon icon={faCircleInfo} />
    </div>
  );
};

export default Tooltips;
