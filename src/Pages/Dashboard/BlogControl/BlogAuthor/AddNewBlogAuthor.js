import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Avatar, Table } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import useTitle from "../../../../hooks/useTitle";
import useScrollToTop from "../../../../hooks/useScrollToTop";

const AddNewBlogAuthor = () => {
  const [load, setLoad] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const [refresh, setRefresh] = useState(false);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setLoad(true);

    fetch(`${process.env.REACT_APP_SERVER_URL}/authors`)
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data.data);
        setLoad(false);
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  const handleAddAuthor = (data) => {
    setLoad(true);

    const author_slug = data.name.toLowerCase().split(" ").join("-");
    const newData = { author_slug, ...data };

    fetch(`${process.env.REACT_APP_SERVER_URL}/add-author`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh);
          setLoad(true);
          reset();
        } else {
          toast.error(data.error);
        }
        setLoad(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoad(false);
      });
  };

  const handleDelete = (id, name) => {
    const userConfirmed = window.confirm(
      `Are you sure to DELETE ${name} from database?`
    );

    if (userConfirmed) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/delete-author/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            setRefresh(!refresh);
            setLoad(true);
          } else {
            toast.error(data.error);
          }
        })
        .catch((error) => toast.error(error.message));
    }
  };

  useTitle("Add New Blog Author");
  useScrollToTop();

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 px-10 lg:px-20">
          <div>
            <form
              onSubmit={handleSubmit(handleAddAuthor)}
              className="flex flex-col gap-4"
            >
              <div>
                <div>
                  <div className="mb-2 block w-full">
                    <Label htmlFor="name" value="Author Name" />
                  </div>
                  <TextInput
                    id="name"
                    {...register("name")}
                    type="text"
                    placeholder="Hasibul Hasan"
                    required={true}
                    shadow={true}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="designation" value="Author Designation" />
                  </div>
                  <TextInput
                    {...register("designation", {
                      required: true,
                    })}
                    id="designation"
                    type="text"
                    placeholder="Admin"
                    shadow={true}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Author Email" />
                  </div>
                  <TextInput
                    {...register("email", {})}
                    id="email"
                    type="email"
                    placeholder="hasib@shikkhanir.com"
                    shadow={true}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="facebookLink" value="Author Facebook" />
                  </div>
                  <TextInput
                    {...register("facebookLink", {})}
                    id="facebookLink"
                    type="url"
                    placeholder="https://www.facebook.com/cbHasib"
                    shadow={true}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="instagramLink" value="Author Instagram" />
                  </div>
                  <TextInput
                    {...register("instagramLink", {})}
                    id="instagramLink"
                    type="url"
                    placeholder="https://www.instagram.com/cbHasib"
                    shadow={true}
                  />
                </div>
              </div>

              <div>
                <div>
                  <div className="mb-2 block w-full">
                    <Label htmlFor="image" value="Author Image" />
                  </div>
                  <TextInput
                    {...register("image")}
                    id="image"
                    type="url"
                    placeholder="www.example.com/image.jpg"
                    required={true}
                    shadow={true}
                  />
                </div>
              </div>

              <div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="author_about" value="Author About" />
                  </div>
                  <Textarea
                    {...register("about")}
                    id="author_about"
                    placeholder="I'm Hasibul Hasan a dedicated learner and web developer who working....."
                    rows={4}
                  />
                </div>
              </div>

              <Button type="submit">Add Author</Button>
            </form>
          </div>

          <div>
            <div className="h-full w-full">
              <Table>
                <Table.Head>
                  <Table.HeadCell>Image</Table.HeadCell>
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>Slug</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {authors?.map((author) => (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={author._id}
                    >
                      <Table.Cell>
                        <Avatar img={author?.image} />
                      </Table.Cell>
                      <Table.Cell className="lg:whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {author?.name}
                      </Table.Cell>
                      <Table.Cell>{author?.author_slug}</Table.Cell>
                      <Table.Cell>
                        <div className="flex gap-5">
                          <Link
                            to={`/admin/blogs/update-author/${author?._id}`}
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                          >
                            Edit
                          </Link>
                          <span
                            onClick={() =>
                              handleDelete(author?._id, author?.name)
                            }
                            className="font-medium text-red-600 hover:underline dark:text-red-500 hover:cursor-pointer"
                          >
                            Delete
                          </span>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewBlogAuthor;
