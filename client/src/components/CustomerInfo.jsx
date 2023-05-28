import React from "react";

const CustomerInfo = () => {
  return (
    <div>
  <div class="container mx-auto max-w-7xl border-b">
    <h2 class="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
      Customer Info
    </h2>

    <div class="grid grid-cols-2 gap-3 px-2">
      <div>
        
        <div class="mb-4">
          <label for="field1" class="font-bold">
            Customer Name:
          </label>
          <input
            type="text"
            id="field1"
            class="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Enter Field 1"
          ></input>
        </div>

       
        <div class="mb-4">
          <label for="field2" class="font-bold">
            Address:
          </label>
          <input
            type="text"
            id="field2"
            class="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Enter Field 2"
          ></input>
        </div>

       
        <div class="mb-4">
          <label for="field3" class="font-bold">
            Phone Number:
          </label>
          <input
            type="text"
            id="field3"
            class="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Enter Field 3"
          ></input>
        </div>

        
        <div class="mb-4">
          <label for="field4" class="font-bold">
            Last Install Date:
          </label>
          <input
            type="date"
            id="field4"
            class="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Enter Field 4"
          ></input>
        </div>

        
        <div class="mb-4">
          <label for="field5" class="font-bold">
            Reason for return trip:
          </label>
          <input
            type="textarea"
            id="field5"
            class="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Enter Field 5"
          ></input>
        </div>
      </div>

      <div>
        
        <div class="mb-4">
          <label for="field6" class="font-bold">
            Does this return trip require new product?
          </label>
          <select
            id="field6"
            class="w-full border border-gray-300 rounded p-2 text-sm"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        
        <div class="mb-4">
          <label for="field7" class="font-bold">
            Item #'s & Description:
          </label>
          <input
            type="textarea"
            id="field7"
            class="w-full border border-gray-300 rounded p-2 text-sm"
            placeholder="Enter Field 7"
          ></input>
        </div>

        
        <div class="mb-4">
          <label for="field8" class="font-bold">
            Photo of defects required for remakes. Complete?
          </label>
          <select
            id="field8"
            class="w-full border border-gray-300 rounded p-2 text-sm"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        
        <div class="mb-4">
          <label for="field9" class="font-bold">
            Has the customer signed off/paid for job?
          </label>
          <select
            id="field9"
            class="w-full border border-gray-300 rounded p-2 text-sm"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

       
        <div class="mb-4">
          <label for="field10" class="font-bold">
            Have you given them a return date?
          </label>
          <select
            id="field10"
            class="w-full border border-gray-300 rounded p-2 text-sm"
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CustomerInfo;
