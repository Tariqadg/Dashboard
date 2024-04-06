import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Drawer from "./Drawer";
import Form from "./Form";
import Navbar from "./Navbar";
import Table from "./Table";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
  rel="stylesheet"
></link>;

const Body = () => {
  // const[Value,setValue]=useState(false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex w-[1440px];
    h-[1024px]
    top-[-106px]
    left-[1032px]
    gap-[0px]
    opacity-[0px] 
    
    "
    >
      <Dashboard />
      <div>
        <Navbar />

        <Table setIsOpen={setIsOpen} />

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
         <Form/>
        </Drawer>
      </div>
    </div>
  );
};

export default Body;
