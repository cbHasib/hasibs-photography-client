import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";

const UpdateBlogCategory = () => {
  const [load, setLoad] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const id = useParams().id;

  const [category, setCategory] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/blog-category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.data);
        setLoad(false);
      })
      .catch((err) => console.error(err));
  }, [refresh, id]);

  const handleUpdateCategory = (data) => {
    setLoad(true);

    fetch(`${process.env.REACT_APP_SERVER_URL}/update-blog-category/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          reset();
          setRefresh(!refresh);
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
        setLoad(false);
      })
      .catch((error) => toast.error(error.message));

    reset();
  };

  return (
    <div>
      {load ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-10 p-5">
            <div className="xl:container px-10">
              <div className="mx-auto h-full sm:w-max">
                <div className="mt-6 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 p-4 px-10 py-7">
                  <h3 className="text-2xl font-semibold text-gray-700 dark:text-white text-center">
                    Update {category?.cat_name} Category
                  </h3>

                  <form
                    onSubmit={handleSubmit(handleUpdateCategory)}
                    className="mt-10 space-y-5 dark:text-white"
                  >
                    <div>
                      <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                        <input
                          {...register("cat_name")}
                          defaultValue={category?.cat_name}
                          name="cat_name"
                          type="text"
                          placeholder="Category Name"
                          className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                        <input
                          {...register("cat_slug")}
                          defaultValue={category?.cat_slug}
                          name="cat_slug"
                          type="text"
                          placeholder="Category Slug"
                          className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                        <input
                          {...register("cat_image")}
                          defaultValue={category?.cat_image}
                          name="cat_image"
                          type="url"
                          placeholder="Category Image"
                          className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <button className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                        <span className="text-base font-semibold text-white dark:text-gray-900">
                          Update Category
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UpdateBlogCategory;
