import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import ShowServices from "../ShowServices/ShowServices";

const ServicesControl = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col justify-center items-center pt-5 pb-10 gap-10">
      <div className="flex justify-center items-center gap-5">
        <Link to="/admin/services/add-service">
          <Button gradientDuoTone="pinkToOrange">Add New Service</Button>
        </Link>
      </div>

      <ShowServices />
    </div>
  );
};

export default ServicesControl;
