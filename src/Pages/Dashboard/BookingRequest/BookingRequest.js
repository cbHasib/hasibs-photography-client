import { Button, Modal, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const BookingRequest = () => {
  const [load, setLoad] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  useTitle("Inbox");
  useScrollToTop();

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/booking-form`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBookings(data.data.reverse());
          setLoad(false);
        } else {
          toast.error(data.error);
          setLoad(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setLoad(false);
      });
  }, [refresh]);

  const handleResolved = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/solved-booking/${id}`, {
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

  useScrollToTop();
  useTitle("Event Booking Request");

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
                <Table.HeadCell>Interest</Table.HeadCell>
                <Table.HeadCell>Event Date</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {bookings?.map((booking) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={booking._id}
                  >
                    <Table.Cell className="lg:whitespace-pre-wrap font-medium  text-gray-900 dark:text-white">
                      {booking.name}
                    </Table.Cell>
                    <Table.Cell>{booking?.serviceTitle}</Table.Cell>
                    <Table.Cell>{booking?.eventDate}</Table.Cell>
                    <Table.Cell
                      className={
                        booking.resolved
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {booking.resolved ? "Solved" : "Pending"}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-5">
                        <Link
                          to={`/admin/request/view/${booking._id}`}
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          View
                        </Link>
                        {booking.resolved ? (
                          <span
                            title="This issue has been resolved"
                            className="font-medium text-gray-400 hover:cursor-default dark:text-gray-200"
                          >
                            Solved
                          </span>
                        ) : (
                          <span
                            onClick={() => {
                              setId(booking._id);
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

export default BookingRequest;
