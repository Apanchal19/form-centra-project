import React from "react";


const AdminToComplete = () => {
  return (
    <div>
      <div className="container mx-auto max-w-7xl border-b">
        <h2 className="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
          Admin To Complete
        </h2>

        <div className="grid grid-cols-2 gap-3 px-2">
          <div>
            <div className="mb-4">
              <label htmlFor="field1" className="font-bold">
                Product Ordered Date:
              </label>
              <input
                type="date"
                id="field1"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Field 1"
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="field2" className="font-bold">
                Expected Arrival Date:
              </label>
              <input
                type="date"
                id="field2"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Field 2"
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="field3" className="font-bold">
                Arranged Return Date:
              </label>
              <input
                type="date"
                id="field3"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Field 3"
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="field4" className="font-bold">
                Attach Remake Form
              </label>
              <select
                id="field4"
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label htmlFor="field5" className="font-bold">
                Confirmed Arrival Date:
              </label>
              <select
                id="field5"
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="field6" className="font-bold">
                Product in Stock:
              </label>
              <select
                id="field6"
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="field7" className="font-bold">
                Job Completed By:
              </label>
              <select
                id="field7"
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="">Select an option</option>
                <option value="yes">Akshay</option>
                <option value="no">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="field8" className="font-bold">
                Job Completed Date
              </label>
              <input
                type="date"
                id="field8"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Date"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminToComplete;
