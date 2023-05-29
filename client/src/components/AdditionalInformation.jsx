import React from "react";

const AdditionalInformation = () => {
  return (
    <div>
      <div className="container mx-auto max-w-7xl border-b">
        <h2 className="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
          Additional Information
        </h2>

        <div className="grid grid-cols-2 gap-3 px-2">
          <div>
            <div className="mb-4">
              <label htmlFor="field1" className="font-bold">
                Additional Instructions for Installer:
              </label>
              <input
                type="textarea"
                id="field1"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter Additional Instructions"
              ></input>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label htmlFor="field2" className="font-bold">
                Completion Notes if needed
              </label>
              <input
                type="textarea"
                id="field2"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter Notes"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
