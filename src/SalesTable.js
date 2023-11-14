import React from "react";

const SalesTable = () => {
  // Sample data for the sales table - two sets of data for two columns
  const column1Data = [
    { product: "Product A", price: "$100" },
    { product: "Product B", price: "$80" },
    { product: "Product c", price: "$80" },
    { product: "Product D", price: "$80" },
    { product: "Product E", price: "$80" },
    { product: "Product F", price: "$80" },
    // Add more data for column 1 as needed
  ];

  const column2Data = [
    
    // Add more data for column 2 as needed
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-4 px-8 text-left">Top Selling Items</th>

                {/* <th className="py-3 px-6 text-left">Units Sold</th> */}
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {column1Data.map((item, index) => (
                <tr
                  key={index}
                  className={
                    (index % 2 === 0 ? "bg-gray-100" : "bg-white") + " border-b"
                  }
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {item.product}
                  </td>
                  <td className="py-3 px-6 text-left">{item.price}</td>
                  <td className="py-3 px-6 text-left">{item.unitsSold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Top Selling Items</th>
                <th className="py-3 px-6 text-left">Total: 578.92</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {column2Data.map((item, index) => (
                <tr
                  key={index}
                  className={
                    (index % 2 === 0 ? "bg-gray-100" : "bg-white") + " border-b"
                  }
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {item.product}
                  </td>
                  <td className="py-3 px-6 text-left">{item.price}</td>
                  <td className="py-3 px-6 text-left">{item.unitsSold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesTable;
