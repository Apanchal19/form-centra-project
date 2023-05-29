import React, { useState } from "react"; 

const CustomerInfo = ({ onCustomerInfo }) => {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastInstallDate, setLastInstallDate] = useState("");
  const [returnReason, setReturnReason] = useState("");
  const [requiresNewProduct, setRequiresNewProduct] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [photoOfDefects, setPhotoOfDefects] = useState("");
  const [signedOffPaid, setSignedOffPaid] = useState("");
  const [givenReturnDate, setGivenReturnDate] = useState("");

  
    // Create an object with the customer information

    const handleSubmit = (e) => {
        e.preventDefault();
        const customerData = {
          customerName: customerName,
          address:address,
          phoneNumber:phoneNumber,
          lastInstallDate:lastInstallDate,
          returnReason:returnReason,
          requiresNewProduct:requiresNewProduct,
          itemDescription:itemDescription,
          photoOfDefects:photoOfDefects,
          signedOffPaid:signedOffPaid,
          givenReturnDate:givenReturnDate,
          
        };
        onCustomerInfo(customerData);
        console.log(customerData.customerName);
    
        // console.log("CustInfo ka anadar ka object:");
        console.log("CustInfo ka anadar ka  CName",customerName);
    
    
      };
    // Call the callback function to pass the customer information back to the MainForm

 
  return (
    <div>
      <div className="container mx-auto max-w-7xl border-b">
        <h2 className="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
          Customer Info
        </h2>

        <div className="grid grid-cols-2 gap-3 px-2">
          <div>
            <div className="mb-4">
              <label htmlFor="customerName" className="font-bold">
                Customer Name:
              </label>
              <input
                type="text"
                id="customerName"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Customer Name"
                // value={customerInfo.customerName}
                // onChange={handleChange}
                
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              / >
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="font-bold">
                Address:
              </label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Address"
                // value={customerInfo.address}
                // onChange={handleChange}
                
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              / >
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="font-bold">
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Phone Number"
                // value={customerInfo.phoneNumber}
                // onChange={handleChange}

                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              / >
            </div>

            <div className="mb-4">
              <label htmlFor="lastInstallDate" className="font-bold">
                Last Install Date:
              </label>
              <input
                type="date"
                id="lastInstallDate"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Date"
                // value={customerInfo.lastInstallDate}
                // onChange={handleChange}


                value={lastInstallDate}
                onChange={(e) => setLastInstallDate(e.target.value)}
              / >
            </div>

            <div className="mb-4">
              <label htmlFor="returnReason" className="font-bold">
                Reason for return trip:
              </label>
              <input
                type="textarea"
                id="returnReason"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Reason"
                // value={customerInfo.returnReason}
                // onChange={handleChange}
                
                value={returnReason}
                onChange={(e) => setReturnReason(e.target.value)}
              / >
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label htmlFor="requiresNewProduct" className="font-bold">
                Does this return trip require new product?
              </label>
              <select
                id="requiresNewProduct"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                // value={customerInfo.requiresNewProduct}
                // onChange={handleChange}

                value={requiresNewProduct}
                onChange={(e) => setRequiresNewProduct(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="itemDescription" className="font-bold">
                Item #'s & Description:
              </label>
              <input
                type="textarea"
                id="itemDescription"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                placeholder="Enter Description"
                // value={customerInfo.itemDescription}
                // onChange={handleChange}
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
              / >
            </div>

            <div className="mb-4">
              <label htmlFor="photoOfDefects" className="font-bold">
                Photo of defects required for remakes. Complete?
              </label>
              <select
                id="photoOfDefects"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                // value={customerInfo.photoOfDefects}
                // onChange={handleChange}
                value={photoOfDefects}
                onChange={(e) => setPhotoOfDefects(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="signedOffPaid" className="font-bold">
                Has the customer signed off/paid for job?
              </label>
              <select
                id="signedOffPaid"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                // value={customerInfo.signedOffPaid}
                // onChange={handleChange}
                value={signedOffPaid}
                onChange={(e) => setSignedOffPaid(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="givenReturnDate" className="font-bold">
                Have you given them a return date?
              </label>
              <select
                id="givenReturnDate"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                // value={customerInfo.givenReturnDate}
                // onChange={handleChange}
                value={givenReturnDate}
                onChange={(e) => setGivenReturnDate(e.target.value)}
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
