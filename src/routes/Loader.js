import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col mt-10 rounded shadow-md w-full animate-pulse h-full">
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                <div className="w-1/2 mx-auto h-16 rounded dark:bg-gray-700"></div><hr />
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
            </div>
        </div>
    );
};

export default Loader;