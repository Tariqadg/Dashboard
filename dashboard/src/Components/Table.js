import React from "react";
import TableData from "./Tabledata";

const Table = ({ setIsOpen }) => {
  return (
    <div className="w-[1240px] h-[844px] left-[96px]  px-8">
      <div className="flex justify-between p-[16px]">
        <div className="w-[169px] h-[36px] px-[8px] py-[12px]">show items</div>
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="w-[169px] h-[36px] px-[8px] py-[12px] bg-black text-white rounded-lg "
          >
            + Add Customer{" "}
          </button>
        </div>
      </div>
      <div className="w-[1212px] h-[689px]  ">
        <TableData />
      </div>

      <div></div>
    </div>
  );
};

export default Table;
