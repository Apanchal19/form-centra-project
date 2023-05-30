// import React, { useState } from "react";

// const CustomerInfo2 = ({ onCustomerInfo }) => {
//   const [customerData, setCustomerData] = useState({
//     customerName: "",
//     address: "",
//     phoneNumber: "",
//     lastInstallDate: "",
//     returnReason: "",
//     requiresNewProduct: "",
//     itemDescription: "",
//     photoOfDefects: "",
//     signedOffPaid: "",
//     givenReturnDate: ""
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setCustomerData((prevData) => ({
//       ...prevData,
//       [id]: value
//     }));
//     console.log("Updated customerData:", customerData);
//     };

//   return (
//     <div>
//       <div className="container mx-auto max-w-7xl border-b">
//         <h2 className="text-1.5xl font-bold text-white px-2 mb-4 bg-blue-600 h-8 py-1">
//           Customer Info
//         </h2>

//         <div className="grid grid-cols-2 gap-3 px-2">
//           <div>
//             <div className="mb-4">
//               <label htmlFor="customerName" className="font-bold">
//                 Customer Name:
//               </label>
//               <input
//                 type="text"
//                 id="customerName"
//                 className="w-full border border-gray-300 rounded p-2 text-sm"
//                 placeholder="Enter Customer Name"
//                 value={customerData.customerName}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Other input fields */}
//           </div>

//           <div>
//             {/* Other input fields */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerInfo2;
