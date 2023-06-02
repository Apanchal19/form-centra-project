import React, { useState } from "react";

const CustomerInfo = () => {
  const [customerData, setCustomerData] = useState({
    WorkNo: "",
    customerName: "",
    address: "",
    phoneNumber: "",
    lastInstallDate: "",
    returnReason: "",
    requiresNewProduct: "",
    itemDescription: "",
    photoOfDefects: "",
    signedOffPaid: "",
    givenReturnDate: "",
    returnDate: "",
    additionalInformation: "",
    completionNotes: "",
    productOrderedDate: "",
    expectedArrivalDate: "",
    arrangedReturnDate: "",
    attachRemakeForm: "",
    confirmedArrivalDate: "",
    productInStock: "",
    jobCompletedBy: "",
    jobCompletedDate: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    WorkNo: false,
    customerName: false,
    address: false,
    phoneNumber: false,
    lastInstallDate: false,
    returnReason: false,
    requiresNewProduct: false,
    itemDescription: false,
    photoOfDefects: false,
    signedOffPaid: false,
    givenReturnDate: false,
    returnDate: false,
    additionalInformation: false,
    productordereddate: false,
    completionNotes: false,
    expectedArrivalDate: false,
    arrangedReturnDate: false,
    attachRemakeForm: false,
    confirmedArrivalDate: false,
    productInStock: false,
    jobCompletedBy: false,
    jobCompletedDate: false,
  });

  //UseState for submitted
  const [submitted, setSubmitted] = useState(false);

  //handleChange event function
  const handleChange = (e) => {
    const { id, value } = e.target;

    // Clear validation error for the changed field
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [id]: false,
    }));

    setCustomerData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  //HandleSubmit funciton
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(customerData);
    // setSubmitted(true); // set form submission status to true

    const errors = {};
    let hasErrors = false;

    // Check for validation errors
    Object.keys(customerData).forEach((key) => {
      if (key === "additionalInformation" || key === "completionNotes" || key === "returnDate") {
        errors[key] = false; // Allow empty values for these fields
      } else if (customerData[key].trim() === "" || customerData[key].trim().length === 0) {
        errors[key] = true;
        hasErrors = true;
      } else {
        errors[key] = false;
      }
    });

    // Conditionally set validation error for "returnDate"
    if (
      customerData.givenReturnDate === "Yes" &&
      customerData.returnDate.trim() === ""
    ) {
      errors.returnDate = true;
      hasErrors = true;
    } else {
      errors.returnDate = false;
    }

    if (hasErrors) {
      setValidationErrors(errors);
      // console.log(errors);
      // console.log(hasErrors);
      return;
    }
    // Reset form fields and set the submitted state to true
    setCustomerData({
      WorkNo: "",
      customerName: "",
      address: "",
      phoneNumber: "",
      lastInstallDate: "",
      returnReason: "",
      requiresNewProduct: "",
      itemDescription: "",
      photoOfDefects: "",
      signedOffPaid: "",
      givenReturnDate: "",
      returnDate: "",
      additionalInformation: "",
      completionNotes: "",
      productOrderedDate: "",
      expectedArrivalDate: "",
      arrangedReturnDate: "",
      attachRemakeForm: "",
      confirmedArrivalDate: "",
      productInStock: "",
      jobCompletedBy: "",
      jobCompletedDate: "",
    });
    setValidationErrors({});
    // setSubmitted(true);

    // onCustomerInfo(customerData); // Call the form submission handler
    // setCustomerData(customerData); // Reset form fields
    // Clear validation errors

    //API to send data to the backend - localhost:5000/api/data customerdata
    const data = {
      WorkNo: customerData.WorkNo,
      customerName: customerData.customerName,
      address: customerData.address,
      phoneNumber: customerData.phoneNumber,
      lastInstallDate: customerData.lastInstallDate,
      returnReason: customerData.returnReason,
      requiresNewProduct: customerData.requiresNewProduct,
      itemDescription: customerData.itemDescription,
      photoOfDefects: customerData.photoOfDefects,
      signedOffPaid: customerData.signedOffPaid,
      givenReturnDate: customerData.givenReturnDate,
      returnDate: customerData.returnDate,
      additionalInformation: customerData.additionalInformation,
      completionNotes: customerData.completionNotes,
      productOrderedDate: customerData.productOrderedDate,
      expectedArrivalDate: customerData.expectedArrivalDate,
      arrangedReturnDate: customerData.arrangedReturnDate,
      attachRemakeForm: customerData.attachRemakeForm,
      confirmedArrivalDate: customerData.confirmedArrivalDate,
      productInStock: customerData.productInStock,
      jobCompletedBy: customerData.jobCompletedBy,
      jobCompletedDate: customerData.jobCompletedDate,
    };

    fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setSubmitted(true); // Output: Data received successfully
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const showReturnDateField = customerData.givenReturnDate === "Yes";

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h1 className="text-xl mt-5 mb-5 px-5">Return Trip Checklist</h1>
          </div>

          <div className="container mx-auto max-w-7xl border-b">
            <h2 className="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
              Customer Info
            </h2>

            
            <div className="grid grid-cols-2 gap-3 px-2">
              <div>
              <div className="mb-4">
                  <label htmlFor="WorkNo" className="font-bold">
                    Work No:
                  </label>
                  <input
                    type="textarea"
                    id="WorkNo"
                    className={`w-full border ${
                      validationErrors.WorkNo
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    placeholder="Enter Work No"
                    value={customerData.WorkNo}
                    onChange={handleChange}
                    required

                    // value={returnReason}
                    // onChange={(e) => setReturnReason(e.target.value)}
                  />
                  {validationErrors.WorkNo && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>
                
                
                
                <div className="mb-4">
                  <label htmlFor="customerName" className="font-bold">
                    Customer Name:
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    className={`w-full border ${
                      validationErrors.customerName
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    placeholder="Enter Customer Name"
                    value={customerData.customerName}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.customerName && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="font-bold">
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    className={`w-full border ${
                      validationErrors.address
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    placeholder="Enter Address"
                    value={customerData.address}
                    onChange={handleChange}
                    required

                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                  />
                  {validationErrors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="font-bold">
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className={`w-full border ${
                      validationErrors.phoneNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    placeholder="Enter Phone Number"
                    value={customerData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="lastInstallDate" className="font-bold">
                    Last Install Date:
                  </label>
                  <input
                    type="date"
                    id="lastInstallDate"
                    className={`w-full border ${
                      validationErrors.lastInstallDate
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    placeholder="Enter Date"
                    value={customerData.lastInstallDate}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.lastInstallDate && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="returnReason" className="font-bold">
                    Reason for return trip:
                  </label>
                  <input
                    type="textarea"
                    id="returnReason"
                    className={`w-full border ${
                      validationErrors.returnReason
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    placeholder="Enter Reason"
                    value={customerData.returnReason}
                    onChange={handleChange}
                    required

                    // value={returnReason}
                    // onChange={(e) => setReturnReason(e.target.value)}
                  />
                  {validationErrors.returnReason && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label htmlFor="requiresNewProduct" className="font-bold">
                    Does this return trip require new product?
                  </label>
                  <select
                    id="requiresNewProduct"
                    className={`w-full border ${
                      validationErrors.requiresNewProduct
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    value={customerData.requiresNewProduct}
                    onChange={handleChange}
                    required

                    // value={requiresNewProduct}
                    // onChange={(e) => setRequiresNewProduct(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {validationErrors.requiresNewProduct && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="itemDescription" className="font-bold">
                    Item #'s & Description:
                  </label>
                  <input
                    type="textarea"
                    id="itemDescription"
                    className={`w-full border ${
                      validationErrors.itemDescription
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    placeholder="Enter Description"
                    value={customerData.itemDescription}
                    onChange={handleChange}
                    required

                    // value={itemDescription}
                    // onChange={(e) => setItemDescription(e.target.value)}
                  />
                  {validationErrors.itemDescription && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="photoOfDefects" className="font-bold">
                    Photo of defects required for remakes. Complete?
                  </label>
                  <select
                    id="photoOfDefects"
                    className={`w-full border ${
                      validationErrors.photoOfDefects
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    value={customerData.photoOfDefects}
                    onChange={handleChange}
                    required

                    // value={photoOfDefects}
                    // onChange={(e) => setPhotoOfDefects(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {validationErrors.photoOfDefects && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="signedOffPaid" className="font-bold">
                    Has the customer signed off/paid for job?
                  </label>
                  <select
                    id="signedOffPaid"
                    className={`w-full border ${
                      validationErrors.signedOffPaid
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    value={customerData.signedOffPaid}
                    onChange={handleChange}
                    required

                    // value={signedOffPaid}
                    // onChange={(e) => setSignedOffPaid(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {validationErrors.signedOffPaid && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="givenReturnDate" className="font-bold">
                    Have you given them a return date?
                  </label>
                  <select
                    id="givenReturnDate"
                    className={`w-full border ${
                      validationErrors.givenReturnDate
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded p-2 text-sm`}
                    value={customerData.givenReturnDate}
                    onChange={handleChange}
                    required

                    // value={givenReturnDate}
                    // onChange={(e) => setGivenReturnDate(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {validationErrors.givenReturnDate && (
                    <p className="text-red-500 text-xs mt-1">
                      Field is required
                    </p>
                  )}
                </div>

                

                {/* Show the "Date" field if 'Yes' is selected */}
                {showReturnDateField && (
                  <div className="mb-4">
                    <label htmlFor="returnDate" className="font-bold">
                      Return Date:
                    </label>
                    <input
                      type="date"
                      id="returnDate"
                      className={`w-full border ${
                        validationErrors.returnDate
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded p-2 text-sm`}
                      placeholder="Enter Date"
                      value={customerData.returnDate}
                      onChange={handleChange}
                      required
                    />
                    {validationErrors.returnDate && (
                      <p className="text-red-500 text-xs mt-1">
                        Field is required
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="container mx-auto max-w-7xl border-b">
                <h2 className="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
                  Additional Information
                </h2>

                <div className="grid grid-cols-2 gap-3 px-2">
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="additionalInformation"
                        className="font-bold"
                      >
                        Additional Instructions for Installer:
                      </label>
                      <input
                        type="textarea"
                        id="additionalInformation"
                        className="w-full border border-gray-300 rounded p-2 text-sm"
                        placeholder="Enter Additional Instructions"
                        value={customerData.additionalInformation}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <label htmlFor="completionNotes" className="font-bold">
                        Completion Notes if needed
                      </label>
                      <input
                        type="textarea"
                        id="completionNotes"
                        className="w-full border border-gray-300 rounded p-2 text-sm"
                        placeholder="Enter Notes"
                        value={customerData.completionNotes}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="container mx-auto max-w-7xl border-b">
                <h2 className="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
                  Admin To Complete
                </h2>

                <div className="grid grid-cols-2 gap-3 px-2">
                  <div>
                    <div className="mb-4">
                      <label htmlFor="productOrderedDate" className="font-bold">
                        Product Ordered Date:
                      </label>
                      <input
                        type="date"
                        id="productOrderedDate"
                        className={`w-full border ${
                          validationErrors.productOrderedDate
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded p-2 text-sm`}
                        placeholder="Enter Date"
                        value={customerData.productOrderedDate}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.productOrderedDate && (
                        <p className="text-red-500 text-xs mt-1">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="expectedArrivalDate"
                        className="font-bold"
                      >
                        Expected Arrival Date:
                      </label>
                      <input
                        type="date"
                        id="expectedArrivalDate"
                        className={`w-full border ${
                          validationErrors.expectedArrivalDate
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded p-2 text-sm`}
                        placeholder="Enter Date"
                        value={customerData.expectedArrivalDate}
                        onChange={handleChange}
                        required
                      ></input>
                      {validationErrors.expectedArrivalDate && (
                        <p className="text-red-500 text-xs mt-1">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="arrangedReturnDate" className="font-bold">
                        Arranged Return Date:
                      </label>
                      <input
                        type="date"
                        id="arrangedReturnDate"
                        className={`w-full border ${
                          validationErrors.arrangedReturnDate
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded p-2 text-sm`}
                        placeholder="Enter Date"
                        value={customerData.arrangedReturnDate}
                        onChange={handleChange}
                        required
                      ></input>
                      {validationErrors.arrangedReturnDate && (
                        <p className="text-red-500 text-xs mt-1">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="attachRemakeForm" className="font-bold">
                        Attach Remake Form
                      </label>
                      <select
                        id="attachRemakeForm"
                        className={`w-full border ${
                          validationErrors.attachRemakeForm
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded p-2 text-sm`}
                        required
                        value={customerData.attachRemakeForm}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {validationErrors.attachRemakeForm && (
                        <p className="text-red-500 text-xs mt-1">
                          Field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="confirmedArrivalDate"
                        className="font-bold"
                      >
                        Confirmed Arrival Date:
                      </label>
                      <select
                        id="confirmedArrivalDate"
                        className={`w-full border ${
                          validationErrors.confirmedArrivalDate
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded p-2 text-sm`}
                        required
                        value={customerData.confirmedArrivalDate}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {validationErrors.confirmedArrivalDate && (
                        <p className="text-red-500 text-xs mt-1">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="productInStock" className="font-bold">
                        Product in Stock:
                      </label>
                      <select
                        id="productInStock"
                        className={`w-full border ${
                          validationErrors.productInStock
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded p-2 text-sm`}
                        required
                        value={customerData.productInStock}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {validationErrors.productInStock && (
                        <p className="text-red-500 text-xs mt-1">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="jobCompletedBy" className="font-bold">
                        Job Completed By:
                      </label>
                      <select
                        id="jobCompletedBy"
                        className={`w-full border ${
                          validationErrors.jobCompletedBy
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded p-2 text-sm`}
                        required
                        value={customerData.jobCompletedBy}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="Yes">Akshay</option>
                        <option value="No">Other</option>
                      </select>
                      {validationErrors.jobCompletedBy && (
                        <p className="text-red-500 text-xs mt-1">
                          Field is required
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="jobCompletedDate" className="font-bold">
                        Job Completed Date
                      </label>
                      <input
                        type="date"
                        id="jobCompletedDate"
                        className={`w-full border ${
                          validationErrors.jobCompletedDate
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded p-2 text-sm`}
                        placeholder="Enter Date"
                        required
                        value={customerData.jobCompletedDate}
                        onChange={handleChange}
                      ></input>
                      {validationErrors.jobCompletedDate && (
                        <p className="text-red-500 text-xs mt-1">
                          Field is required
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* {submitted && (
                <p className="flex justify-center max-h-8 mt-4 text-lg text text-red-600">
                  Form submitted successfully!
                </p>
              )} */}
              {submitted ? (
                <p className="flex justify-center max-h-8 mt-4 text-lg text text-red-600">Form submitted successfully!</p>
              ) : null}
            </div>

            {/* <div className="flex justify-center max-h-full ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded h-12 mt-10 mb-10 cursor-pointer w-36"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div> */}

            <div className="flex justify-center max-h-full">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded h-12 mt-4 mb-8 cursor-pointer w-36"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;
