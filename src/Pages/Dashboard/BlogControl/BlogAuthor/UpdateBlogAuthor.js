import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useScrollToTop from "../../../../hooks/useScrollToTop";
import useTitle from "../../../../hooks/useTitle";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";

const UpdateBlogAuthor = () => {
  const id = useParams().id;

  const [author, setAuthor] = useState({});
  const [load, setLoad] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoad(true);

    fetch(`${process.env.REACT_APP_SERVER_URL}/author/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.data);
        setLoad(false);
      })
      .catch((error) => console.log(error));
  }, [refresh, id]);

  const handleUpdateAuthor = (data) => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/update-author/${id}`, {
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

  useTitle("Update Blog Author");
  useScrollToTop();

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : (
        <div className="py-10 px-10">
          <div>
            <form
              onSubmit={handleSubmit(handleUpdateAuthor)}
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
                    defaultValue={author?.name}
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
                    defaultValue={author?.designation}
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
                    defaultValue={author?.email}
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
                    defaultValue={author?.facebookLink}
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
                    defaultValue={author?.instagramLink}
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
                    defaultValue={author?.image}
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
                    shadow={true}
                  />
                </div>
              </div>

              <Button type="submit">Update Author</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateBlogAuthor;
