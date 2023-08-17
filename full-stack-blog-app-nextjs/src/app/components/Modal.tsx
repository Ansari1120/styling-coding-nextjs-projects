import React from "react";

const Modal = ({ children, openModal, setOpenModal }: any) => {
  const maxHeight = window.innerHeight * 0.9; // Set a maximum height (80% of screen height)

  return (
    <>
      {openModal && (
        <div className="bg-black/50 fixed inset-0 ">
          <div className="flex justify-center items-start h-full">
            {/* Changed items-center to items-start */}
            <div
              className="flex flex-col items-end bg-slate-300 w-1/2 p-5"
               style={{ maxHeight: `${maxHeight}px` }}
            >
              <button
                onClick={() => setOpenModal(false)}
                className="text-2xl mb-3"
              >
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
