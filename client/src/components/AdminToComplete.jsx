import React from "react";

const AdminToComplete = () => {
  return (
    <div>
      <div class="container mx-auto max-w-7xl border-b">
        <h2 class="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
          Admin To Complete
        </h2>

        <div class="grid grid-cols-2 gap-3 px-2">
          <div>
            <div class="mb-4">
              <label for="field1" class="font-bold">
                Product Ordered Date:
              </label>
              <input
                type="date"
                id="field1"
                class="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Field 1"
              ></input>
            </div>

            <div class="mb-4">
              <label for="field2" class="font-bold">
                Expected Arrival Date:
              </label>
              <input
                type="date"
                id="field2"
                class="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Field 2"
              ></input>
            </div>

            <div class="mb-4">
              <label for="field3" class="font-bold">
                Arranged Return Date:
              </label>
              <input
                type="date"
                id="field3"
                class="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Field 3"
              ></input>
            </div>

            <div class="mb-4">
              <label for="field4" class="font-bold">
                Attach Remake Form
              </label>
              <select
                id="field4"
                class="w-full border border-gray-300 rounded p-2"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div>
            <div class="mb-4">
              <label for="field5" class="font-bold">
                Confirmed Arrival Date:
              </label>
              <select
                id="field5"
                class="w-full border border-gray-300 rounded p-2"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div class="mb-4">
              <label for="field6" class="font-bold">
                Product in Stock:
              </label>
              <select
                id="field6"
                class="w-full border border-gray-300 rounded p-2"
              >
                <option value="">Select an option</option>
                <option value="yes">Akshay</option>
                <option value="no">Jack</option>
              </select>
            </div>

            <div class="mb-4">
              <label for="field7" class="font-bold">
                Job Completed By:
              </label>
              <select
                id="field7"
                class="w-full border border-gray-300 rounded p-2"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div class="mb-4">
              <label for="field8" class="font-bold">
                Job Completed Date
              </label>
              <input
                type="textarea"
                id="field8"
                class="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Field 8"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminToComplete;
