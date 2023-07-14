import { useState } from 'react';

const ClipboardCopy = ({ clipBoardCopy, token }) => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(clipBoardCopy);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="p-4 text-green-900 bg-green-100 border border-green-200 rounded-md">
        <div className="flex justify-between flex-wrap">
            <div className="w-0 flex-1 flex">
                <div>
                    <h4 className="text-md leading-6 font-medium">
                        Token
                    </h4>
                        <p className="text-sm">
                        {token} 
                        </p>
                    <div className="flex mt-3">
                        <button 
                            type="button" 
                            onClick={copyToClipboard}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:text-sm">
                            Copy to Clipboard
                        </button>
                        {showNotification && (
                        <button 
                            type="button" 
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ml-2 bg-green-200 text-base font-medium hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 sm:w-auto sm:text-sm"
                            >
                        Token Saved to Clipboard
                        <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M8.445 12.6675A.9.9 0 0 0 7.1424 13.91l2.5726 2.7448c.3679.3856.9884.3689 1.335-.036l5.591-7.0366a.9.9 0 0 0-1.3674-1.1705l-4.6548 5.9132a.4.4 0 0 1-.607.0252l-1.567-1.6826zM1.9995 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"></path>
                        </svg>
                        </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ClipboardCopy;
