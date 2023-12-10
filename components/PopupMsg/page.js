"use client"
import React, { useState } from 'react';

const PopupMsg = () => {
    const [showBanner, setShowBanner] = useState(true);

    const cancel = () => {
        setShowBanner(false);
    }

    return (
        <>
            {showBanner ? (
                <div className="fixed top-[4.5rem] z-50 left-0 w-full bg-sky-500 border-b border-white text-white text-center md:py-4 py-7">
                    <p className="text-sm font-mono font-bold flex justify-center">Launch - January 2024!
                        <button onClick={cancel}>
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 flex justify-center ml-5 hover:bg-white hover:text-sky-500 rounded-lg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </p>
                </div>
            ) : (
                <div className=""></div>
            )}
        </>
    );
}

export default PopupMsg;
