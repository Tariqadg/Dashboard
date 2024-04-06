import React, { useEffect, useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { ButtonGroup } from "@mui/material";
import  _  from 'lodash';
const TableData = () => {
  const [data, setData] = useState();
  const [update, setUpdate] = useState(false);
  const [customer, setcustomer] = useState();
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [paymentMode, setPaymentMode] = useState();
  const [status, setStatus] = useState();
  const [activerow, setActiveRow] = useState();
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [pagearray,setPagearray]=useState([])
 

 

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/length");
    const totalItems=(parseInt(res.data.length));

    const pages = parseInt(totalItems / 10) + ((totalItems % 10)>0);
    settotalpages(pages);
    const pg= _.range(1, pages+1 )
    setPagearray(pg);
    



    const data = await fetch(`http://localhost:5000/item/${page}`);

    const json = await data.json();
    setData(json);
  };
  useEffect(() => {

    fetchData();
    // eslint-disable-next-line
  }, [page]);

  

  const handleUpdate = (trackingId) => {
    
    const order = {
      trackingId: trackingId,
      customer: customer,
      date: date,
      amount: amount,
      paymentMode: paymentMode,
      status: status,
    };
    axios
      .put(`http://localhost:5000/item`, order)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
        
          window.location.reload();
        } else {
          console.error("API request unsuccessful:", res);
        }
      })
      .catch((er) => (er));
  };

  const handleDelete = (trackingId) => {
    axios
      .delete(`http://localhost:5000/item/${trackingId}`)
      .catch((err) => console.log(err));
    window.location.reload();

  };
  const handleUpdateclick = (trackingId) => {
    setActiveRow(trackingId);
    setUpdate(true);
  };

  return (
    <>
      <div className="w-full py-8 h-screen flex flex-col  justify-center">
        <table className="border-collapse p-4 w-full  border  ">
          <thead className="">
            <tr className="border-t-3 border-b-3 border-r-3 border-l-3  font-extrabold">
              <th className="p-8">Tracking id</th>
              <th className="">Product</th>
              <th className="m-[4px]">Customer</th>
              <th className="m-[4px]">Date</th>
              <th className="m-[4px]">
                Amount
                
              </th>

              <th className="m-[4px]">payment Mode</th>
              <th className="m-[4px]">Status</th>
              <th className="m-[4px]">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {data?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`   ${
                    index % 2 === 0 && "bg-gray-100"
                  }`}
                >
                  <td className="text-center py-4 ">{item.trackingId}</td>
                  <td className="text-center py-4">{item.product}</td>
                  <td className="text-center py-4">
                    {update && activerow === item.trackingId ? (
                      <input
                        className=" "
                        type="text"
                        // value={item.customer}
                        onChange={(e) => setcustomer(e.target.value)}
                      />
                    ) : (
                      item.customer
                    )}
                  </td>
                  <td className="text-center py-4 " >
                    {update && activerow === item.trackingId ? (
                      <input
                        className=" "
                        type="date"
                        placeholder="Date"

                        onChange={(e) => setDate(e.target.value)}
                      />
                    ) : (
                      item.date
                    )}
                  </td>
                  <td className="text-center py-4">
                    {update && activerow === item.trackingId ? (
                      <input
                        className=" "
                        type="text"
                        placeholder="$1,000,000.00"
                        onChange={(e) => setAmount(e.target.value)}
                      ></input>
                    ) : (
                      item.amount
                    )}
                  </td>
                  <td className="text-center py-4 ">
                    {update && activerow === item.trackingId ? (
                      <select
                        className=" w-[336px] h-[48px] top-[165px] mx-6 border-[1px] px-[8px] py-[16px] gap-[8px] border-gray-200"
                        onChange={(e) => setPaymentMode(e.target.value)}
                        value={paymentMode}
                      >
                        <option value="None"></option>

                        <option value="Transfer Bank">Transfer Bank</option>
                        <option value="Cash on Delivery">
                          Cash on Delivery
                        </option>
                        <option value="UPI Payment">UPI Payment</option>
                      </select>
                    ) : (
                      item.paymentMode
                    )}
                  </td>

                  <td className="text-center py-4 ">
                    <div
                      className={`text-center rounded-full    ${
                        item.status === "Delivered"
                          ? "bg-green-100 text-green-400  "
                          : item.status === "Process"
                          ? "bg-orange-100 text-orange-400"
                          : item.status === "Cancelled"
                          ? "bg-pink-100"
                          : ""
                      }  `}
                    >
                      {update && activerow === item.trackingId ? (
                        <select
                          className=""
                          onChange={(e) => setStatus(e.target.value)}
                          value={status}
                        >
                          <option value="None"></option>
                          <option value="Delivered">Delivered</option>
                          <option value="Process">Process</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      ) : (
                        item.status
                      )}
                    </div>
                  </td>
                  <td className="text-center  py-4">
                    {update && activerow === item.trackingId ? (
                      <button onClick={() => handleUpdate(item.trackingId)}>
                        Update
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            handleUpdateclick(item.trackingId);
                          }}
                          className=" "
                        >
                          <FiEdit className="w-6 h-6 mx-2" />
                        </button>
                        {"    "}
                        <button
                          className="opacity-30"
                          onClick={() => handleDelete(item.trackingId)}
                        >
                          <LuTrash2 className="w-6 h-6 mx-2" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex w-full flex-row justify-between items-end mx-2 py-2 pr-2">
          <div>
            
          </div>
          <div>
          <button className="p-2 mr-2 border-gray-100  opacity-50" onClick={()=>page>1 && setPage(prev=>prev-1)}>prev</button>
          <ButtonGroup sx={{mr:"1em"}} size="large" aria-label="Small button group">
    
          {pagearray.map((pageNumber, index) => (
  <button className="p-2  border-gray-100 bg-gray-100" onClick={()=>setPage(pageNumber)} key={index} value={pageNumber}>{pageNumber}</button>
))}
          </ButtonGroup>
          <button  className="p-2 mr-2 border-gray-100  opacity-50" onClick={()=>page<totalpages && setPage(prev=>prev+1)}>next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
