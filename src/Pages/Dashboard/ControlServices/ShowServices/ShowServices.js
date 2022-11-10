import { Avatar, Button, Modal, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";

const ShowServices = () => {
  const [load, setLoad] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [services, setServices] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/services`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data.reverse());
        } else {
          toast.error(data.error);
        }
        setLoad(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoad(false);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    setLoad(true);

    fetch(`${process.env.REACT_APP_SERVER_URL}/delete-service/${id}`, {
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

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="h-full w-full flex items-center justify-center">
            <Table>
              <Table.Head>
                <Table.HeadCell>Image</Table.HeadCell>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {services?.map((service) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={service._id}
                  >
                    <Table.Cell>
                      <Avatar img={service.thumbnail} />
                    </Table.Cell>
                    <Table.Cell className="font-medium text-gray-900 dark:text-white">
                      {service.title}
                    </Table.Cell>
                    <Table.Cell>{service.price}</Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-5">
                        <Link
                          to={`/admin/services/update-service/${service._id}`}
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Edit
                        </Link>
                        <span
                          onClick={() => {
                            setId(service._id);
                            setShow(true);
                          }}
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
          <div>
            <Modal
              show={show}
              size="md"
              popup={true}
              onClose={() => setShow(false)}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this service?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button
                      color="failure"
                      onClick={() => {
                        handleDelete(id);
                        setShow(false);
                      }}
                    >
                      Yes, I'm sure
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => {
                        setShow(false);
                        setId("");
                      }}
                    >
                      No, cancel
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowServices;
