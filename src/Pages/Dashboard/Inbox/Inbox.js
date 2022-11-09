import { Button, Modal, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const Inbox = () => {
  const [load, setLoad] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/contact-form`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContacts(data.data.reverse());
          setLoad(false);
        } else {
          alert(data.error);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [refresh]);

  const handleResolved = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/solved-contact/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Issue resolved successfully");
          setRefresh(!refresh);
          setLoad(true);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="h-full w-full flex items-center justify-center py-10">
            <Table>
              <Table.Head>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Subject</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {contacts?.map((contact) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={contact._id}
                  >
                    <Table.Cell className="whitespace-pre-wrap font-medium  text-gray-900 dark:text-white">
                      {contact.name}
                    </Table.Cell>
                    <Table.Cell>{contact.subject}</Table.Cell>
                    <Table.Cell>
                      {new Date(contact?.date).toLocaleString("en-US")}
                    </Table.Cell>
                    <Table.Cell
                      className={
                        contact.resolved
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {contact.resolved ? "Solved" : "Pending"}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-5">
                        <Link
                          to={`/contacts/view-contact/${contact._id}`}
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          View
                        </Link>
                        {contact.resolved ? (
                          <span
                            title="This issue has been resolved"
                            className="font-medium text-gray-400 hover:cursor-default dark:text-gray-200"
                          >
                            Solved
                          </span>
                        ) : (
                          <span
                            onClick={() => {
                              setId(contact._id);
                              setShow(true);
                            }}
                            className="font-medium text-red-600 hover:underline dark:text-red-500 hover:cursor-pointer"
                          >
                            Mark as solved
                          </span>
                        )}
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
                    Are you sure you resolved this?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button
                      color="failure"
                      onClick={() => {
                        handleResolved(id);
                        setShow(false);
                      }}
                    >
                      Yes, I'm sure
                    </Button>
                    <Button color="gray" onClick={() => setShow(false)}>
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

export default Inbox;
