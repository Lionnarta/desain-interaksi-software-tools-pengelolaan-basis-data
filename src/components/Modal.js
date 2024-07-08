import styled, { keyframes } from "styled-components";

const Modal = ({
  children,
  show,
  closeModal,
  width = "500px",
  borderRadius = "20px",
}) => {
  return (
    show && (
      <div className="fixed left-0 top-0 w-full h-full z-[999]">
        <div
          className="fixed left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)]"
          onClick={closeModal}
        ></div>
        <DivAnimation
          className={`absolute top-[20%] left-[50%] -translate-x-1/2 px-[30px] py-[50px] max-w-[90%] bg-white`}
          style={{ width: width, borderRadius: borderRadius }}
        >
          {children}
        </DivAnimation>
      </div>
    )
  );
};

export default Modal;

const entryAnimation = keyframes`
    0% {top: 0; opacity: 0;}
    100% {top: 20%; opacity: 1;}
`;

const DivAnimation = styled.div`
  animation: ${entryAnimation} 300ms;
`;
