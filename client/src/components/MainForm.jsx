import React, { useState } from "react";
import Header from "./Header";
import CustomerInfo from "./CustomerInfo";
import AdditionalInformation from "./AdditionalInformation";
import AdminToComplete from "./AdminToComplete";
import SubmitButton from "./SubmitButton";

const MainForm = () => {
  const [customerInfo, setCustomerInfo] = useState({});

  const handleCustomerInfo = (data) => {
    setCustomerInfo((prevInfo) => ({ ...prevInfo, ...data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mainform object:", customerInfo);
    console.log("MainForm CName", customerInfo.customerName);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <CustomerInfo onCustomerInfo={handleCustomerInfo} />
        <AdditionalInformation />
        <AdminToComplete />
        <SubmitButton onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default MainForm;
