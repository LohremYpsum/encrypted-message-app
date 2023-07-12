import React from 'react';

const Modal = ({ isOpen, onClose, children, about }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 flex items-center justify-center backdrop-blur">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-content bg-white w-full max-w-md mx-auto rounded-lg z-50">
        <div className="modal-header flex justify-between items-center px-4 py-2">
          <h2 className="text-lg font-bold">{about}</h2>
          <div>
            <button 
              type="button" 
              className="modal-close text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={onClose}
              >
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
          </div>
        </div>
        <div className="modal-body px-4 py-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
