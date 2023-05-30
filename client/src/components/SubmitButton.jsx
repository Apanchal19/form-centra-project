import React from "react";

const SubmitButton = () => {

    return (
    <div className="flex justify-center max-h-full ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded h-12 mt-10 mb-10 cursor-pointer w-36"
        type="submit"
        
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
