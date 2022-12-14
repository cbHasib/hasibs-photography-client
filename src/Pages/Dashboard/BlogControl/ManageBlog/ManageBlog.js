import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import useScrollToTop from "../../../../hooks/useScrollToTop";
import useTitle from "../../../../hooks/useTitle";
import BlogList from "../BlogList/BlogList";

const ManageBlog = () => {
  useScrollToTop();
  useTitle("Manage Blog");
  return (
    <>
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center pt-5 pb-10 gap-10">
        <div className="flex justify-center items-center gap-5">
          <Link to="/admin/blogs/add-author">
            <Button gradientDuoTone="purpleToBlue">Manage Author</Button>
          </Link>
          <Link to="/admin/blogs/add-category">
            <Button gradientDuoTone="cyanToBlue">Manage Category</Button>
          </Link>
          <Link to="/admin/blogs/add-new-blog">
            <Button gradientDuoTone="greenToBlue">Add New Blog</Button>
          </Link>
        </div>

        <BlogList />
      </div>
    </>
  );
};

export default ManageBlog;
