import React from "react";

const Header = () => {
  return (
    // First div
    <div>
      {/* Start of the form */}
      <form>
        {/* 2.1 Header name is "Return Trip Checklist" */}
        <div className="h-16 flex items-center px-8  ">
          <h1 className="font-serif  text-2xl font-medium">Return Trip Checklist</h1>
        </div>
{/* 
        2.2 Section 1: Customer Info

        <section>
          <div>
            <label htmlFor="workOrder">Work Order: </label>
            <input type="text" name="workOrder" placeholder="W/0#" required />
          </div>

          <div>
            <label htmlFor="customerName">Customer Name: </label>
            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              required
            />
          </div>

          Form fields will be added here
          <div>
            <button type="submit">Submit</button>
          </div>
        </section> */}

        {/* End of the form */}
      </form>
      {/* End of first div */}
    </div>
  );
};

export default Header;
