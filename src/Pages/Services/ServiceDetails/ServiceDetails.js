import React from "react";
import {
  FaCalendar,
  FaEnvelope,
  FaMapPin,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PhotoProvider, PhotoView } from "react-photo-view";
import CustomerReview from "./CustomerReview";
import AddReview from "./AddReview";

const ServiceDetails = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
  ];

  return (
    <div>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gradient-to-r from-gray-900 to-black opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full flex flex-col justify-center items-center max-w-7xl mx-auto text-center">
                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Wedding Photography
                </h2>
                <p className="max-w-xl mx-auto mb-4 text-base text-gray-300 md:text-lg">
                  Capture your special moments with Hasibul Hasan.
                </p>
                <button
                  onClick={() => {
                    document
                      .getElementById("details")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  aria-label=""
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 max-w-fit text-center"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="details"
        className="py-12 bg-gray-100 dark:bg-slate-900 dark:border-b dark:border-gray-800"
      >
        <div className="grid grid-cols-3 px-5 sm:px-4 py-3 gap-4 w-full max-w-7xl mx-auto">
          <div className="col-span-2 bg-white rounded-md dark:bg-slate-800 pt-6 pb-12 px-5 lg:px-10">
            <div className="flex justify-between items-center pb-2 dark:text-white/80">
              <h2 className="text-2xl font-bold mb-3">Service Details</h2>
              <h2 className="text-xl font-semibold mb-3">Price: ৳764</h2>
            </div>
            <p className="text-justify mb-7 dark:text-white/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              temporibus cupiditate quisquam? Cumque dolores eaque enim qui
              veritatis, voluptatem corrupti, veniam repellat ducimus distinctio
              perferendis explicabo est nulla perspiciatis eius? Vitae iure
              nobis blanditiis necessitatibus est fugit id autem voluptate quia!
              Doloremque, praesentium. Dicta nesciunt magni fugiat. Commodi
              porro illo eius quis consequatur tempora at. Quis ducimus
              repudiandae iure sapiente perspiciatis. Ducimus ullam sit magni
              exercitationem tempore ipsa voluptatibus, sunt neque voluptatum,
              aliquam aperiam. Laboriosam, modi quibusdam magni ipsum tempora
              beatae officiis quaerat quam mollitia ducimus dolor labore
              officia! Recusandae eveniet quidem incidunt perspiciatis sequi
              repellat. Culpa doloremque sit obcaecati aut illo deleniti enim
              assumenda, repellendus doloribus, beatae eaque itaque nisi quod
              dolores minus quas aliquam deserunt maxime facere sequi!
              Consequuntur commodi magni non enim sed ut inventore. Nostrum
              maxime tempore ipsam quis dicta quasi magnam unde temporibus porro
              voluptatem suscipit iste blanditiis aperiam, eius molestiae
              incidunt tempora quae sint doloribus maiores vero! Minus officia
              sit dolor voluptates, tempora temporibus quas accusantium
              excepturi explicabo esse, tenetur animi quod cumque beatae libero
              expedita, odio vel totam voluptatum illo placeat pariatur veniam?
              Harum unde voluptates id quis facilis voluptatem cum dolor
              veritatis nemo, voluptatibus nisi, eum dolores deserunt quos
              commodi. Aliquid, quas.
            </p>

            <h2 className="text-2xl font-bold mt-5 mb-3 dark:text-white/80">
              Service Gallery
            </h2>
            <PhotoProvider>
              <div className="flex flex-wrap gap-5 justify-center">
                {images.map((item, index) => (
                  <PhotoView key={index} src={item}>
                    <figure className="relative">
                      <img
                        src={item}
                        alt=""
                        className="w-[120px] h-[120px] object-cover cursor-pointer rounded-md"
                      />
                      <div className="absolute inset-0 duration-300 hover:bg-blue-800 hover:bg-opacity-50 rounded-md"></div>
                    </figure>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>

            <div className="mt-16">
              <CustomerReview />
            </div>
            <div className="mt-16">
              <AddReview />
            </div>
          </div>

          <div className="w-full px-5">
            <div className="bg-white dark:bg-slate-800 rounded-md shadow-md p-7 sm:p-10 sticky top-20">
              <h3 className="dark:text-white/90 mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl underline  decoration-3 decoration-blue-400 dark:decoration-blue-600">
                Book Now
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      {...register("name")}
                      id="name"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                      <FaEnvelope />
                    </span>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                      <FaPhoneAlt />
                    </span>
                    <input
                      type="tel"
                      {...register("phone")}
                      id="phone"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                      <FaCalendar />
                    </span>
                    <input
                      type="date"
                      {...register("date")}
                      id="date"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Event Date"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-6">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                      <FaMapPin />
                    </span>
                    <input
                      type="text"
                      {...register("address")}
                      id="address"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Address"
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
