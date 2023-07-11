import React from "react";

const ErrorMessage = ({errorMsg}) => {
    return (
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <div class=" bg-red-100 border-t border-b border-blue-500 text-red-700 px-4 py-3" role="alert">
                <p class="font-bold">Uh no!</p>
                <p class="text-sm">{errorMsg}</p>
            </div>
        </div>
    );
};

export default ErrorMessage;