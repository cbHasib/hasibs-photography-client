import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";
import "./AddNewService.css";

const AddNewService = () => {
  const [load, setLoad] = useState(false);
  const { reset } = useForm();
  const [refresh, setRefresh] = useState(false);
  const [images, setImages] = useState([]);

  const checkURL = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  const handleKeyDown = (e) => {
    if (e.which !== 188) return;
    const value = e.target.value;
    if (!value.trim()) return;
    if (checkURL(value)) {
      setImages([...images, value.trim()]);
      e.target.value = "";
    } else {
      toast.error("Please enter a valid image URL");
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((el, i) => i !== index));
  };

  const handleAddService = (e) => {
    e.preventDefault();
    setLoad(true);
    const title = e.target.title.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    const thumbnail = e.target.thumbnail.value;

    const newData = {
      title,
      price,
      details,
      thumbnail,
      gallery: images,
    };

    console.log(newData);

    fetch(`${process.env.REACT_APP_SERVER_URL}/add-new-service`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          reset();
          setImages([]);
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
        setRefresh(!refresh);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : (
        <div className="lg:py-10 lg:px-20 mx-auto">
          <form
            onSubmit={handleAddService}
            className="flex flex-col gap-4 p-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
              <div className="lg:col-span-5">
                <div className="mb-2 block w-full">
                  <Label htmlFor="title" value="Service Title" />
                </div>
                <TextInput
                  id="title"
                  type="text"
                  placeholder="Wedding Photography"
                  required={true}
                  shadow={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Price" />
                </div>
                <TextInput
                  id="price"
                  type="number"
                  addon="৳"
                  shadow={true}
                  required
                />
              </div>
            </div>

            <div>
              <div className="mb-2 block w-full">
                <Label htmlFor="thumbnail" value="Service Thumbnail" />
              </div>
              <TextInput
                id="thumbnail"
                type="url"
                placeholder="www.example.com/image.jpg"
                required={true}
                shadow={true}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="details" value="Service Details" />
              </div>
              <Textarea
                id="details"
                type="text"
                placeholder="Hasibul Hasan could be the best option for your big day. He has been successfully covering wedding events as well with his photography creativity to make the day special for couples........"
                required={true}
                rows={5}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="gallery"
                  value="Image Gallery (Can be Added Multiple Image)"
                />
              </div>
              <TextInput
                onKeyDown={handleKeyDown}
                id="gallery"
                type="text"
                placeholder="www.example.com/image1.jpg, www.example.com/image2.jpg,...."
                rows={5}
                className="mb-3"
              />

              {images.map((image, index) => (
                <div className="image-item" key={index}>
                  <span className="text">{image}</span>
                  <span className="close" onClick={() => removeImage(index)}>
                    &times;
                  </span>
                </div>
              ))}
            </div>

            <Button type="submit">Add Service</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddNewService;
