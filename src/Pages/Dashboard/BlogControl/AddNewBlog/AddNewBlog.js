import {
  Button,
  FileInput,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useScrollToTop from "../../../../hooks/useScrollToTop";
import useTitle from "../../../../hooks/useTitle";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";
import defaultBlog from "../../../../assets/images/blog_default.png";

const AddNewBlog = () => {
  const [load, setLoad] = useState(true);
  const { register, handleSubmit, reset, setValue } = useForm();
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [catName, setCatName] = useState("");
  const [blogTitle, setBlogTitle] = useState("");

  const [slugMake, setSlugMake] = useState("");

  useTitle("Add New Blog");
  useScrollToTop();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/authors`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAuthors(data.data);
        } else {
          toast.error(data.error);
        }
        setLoad(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setLoad(false);
  }, [refresh]);

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/blog-categories`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        } else {
          console.log(data.error);
        }
        setLoad(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setLoad(false);
  }, [refresh]);

  // Date
  const makeDate = new Date().toDateString().split(" ").slice(1, 4);
  const today = makeDate[0] + " " + makeDate[1] + ", " + makeDate[2];
  // Date

  const handleAddBlog = async (data) => {
    setLoad(true);
    const { author, postCategory } = data;

    const authorName = author.split(";")[0];
    const author_id = author.split(";")[1];
    const postCatName = postCategory.split(";")[0];
    const cat_id = postCategory.split(";")[1];

    /*     const slug = `${postCatName.toLowerCase().split(" ").join("-")}/${title
      .toLowerCase()
      .split(" ")
      .join("-")}`; */

    data.author = authorName;
    data["author_id"] = author_id;
    data["cat_id"] = cat_id;
    data.postCategory = postCatName;

    const formData = new FormData();
    formData.append("image", data.thumbnail[0]);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}&name=${data.title}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const imgData = await response.json();

    if (imgData.success) {
      data.thumbnail = imgData.data.display_url;
    } else {
      data.thumbnail = defaultBlog;
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/add-new-blog`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          reset();
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
        setRefresh(!refresh);
        setLoad(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoad(false);
      });
  };

  useEffect(() => {
    const slug = `${catName
      .split(";")[0]
      .toLowerCase()
      .split(" ")
      .join("-")}/${blogTitle.toLowerCase().split(" ").join("-")}`;

    setSlugMake(slug);

    setValue("slug", slug);
  }, [catName, blogTitle, setValue]);

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : (
        <div className="w-[80%] mx-auto py-10">
          <form
            onSubmit={handleSubmit(handleAddBlog)}
            className="flex flex-col gap-4"
          >
            <div>
              <div>
                <div className="mb-2 block w-full">
                  <Label htmlFor="title" value="Blog Title" />
                </div>
                <TextInput
                  id="title"
                  {...register("title")}
                  type="text"
                  placeholder="What is the blog title?"
                  required={true}
                  shadow={true}
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="readingMinute" value="Reading Minute" />
                </div>

                <TextInput
                  {...register("readingMinute", {
                    required: true,
                    min: 0,
                    setValueAs: Number,
                  })}
                  id="hours"
                  type="number"
                  min={0}
                  shadow={true}
                  placeholder="5"
                />
              </div>

              <div>
                <div className="mb-2 block w-full">
                  <Label htmlFor="category" value="Post Category" />
                </div>
                <Select
                  id="category"
                  required={true}
                  {...register("postCategory", {
                    required: true,
                  })}
                  onBlur={(e) => setCatName(e.target.value)}
                >
                  {categories?.map((category) => (
                    <option
                      value={category?.cat_name + ";" + category?._id}
                      key={category?._id}
                    >
                      {category?.cat_name}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <div className="mb-2 block w-full">
                  <Label htmlFor="author" value="Post Author" />
                </div>
                <Select
                  {...register("author", {
                    required: true,
                  })}
                  id="author"
                >
                  {authors?.map((author) => (
                    <option
                      value={author?.name + ";" + author?._id}
                      key={author._id}
                    >
                      {author?.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <div>
                <div className="mb-2 block w-full">
                  <Label htmlFor="slug" value="Blog Slug" />
                </div>
                <TextInput
                  {...register("slug")}
                  id="slug"
                  type="text"
                  placeholder="web-development/what-is-web-development"
                  required={true}
                  shadow={true}
                  defaultValue={slugMake}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 block w-full">
                <Label htmlFor="thumbnail" value="Upload Blog Thumbnail" />
              </div>
              <FileInput
                accept="image/*"
                id="thumbnail"
                {...register("thumbnail")}
                helperText="A blog thumbnail picture is useful to the user"
              />
            </div>

            <div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="postBody" value="Post Body (HTML)" />
                </div>
                <Textarea
                  {...register("postBody")}
                  id="postBody"
                  placeholder="Now we are going to talk about todays topic............."
                  required={true}
                  rows={6}
                />
              </div>
            </div>

            <div className="hidden">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="publishDate" value="Publish Date" />
                </div>

                <TextInput
                  {...register("publishDate")}
                  id="publishDate"
                  type="text"
                  shadow={true}
                  placeholder="July 5, 2022"
                  value={today}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="liked" value="Liked" />
                </div>

                <TextInput
                  {...register("liked", {
                    // setValueAs: Boolean,
                    setValueAs: (value) => {
                      return value === false;
                    },
                  })}
                  id="liked"
                  type="text"
                  shadow={true}
                  value={false}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="reactionCount" value="reaction Count" />
                </div>

                <TextInput
                  {...register("reactionCount", {
                    valueAsNumber: true,
                  })}
                  id="reactionCount"
                  type="number"
                  shadow={true}
                  value={0}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="viewCount" value="view Count" />
                </div>

                <TextInput
                  {...register("viewCount", {
                    valueAsNumber: true,
                  })}
                  id="viewCount"
                  type="number"
                  shadow={true}
                  value={0}
                />
              </div>
            </div>

            <Button type="submit">Add Blog</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddNewBlog;
