import axios from "axios";
import { bool_state, param_interface } from "../interfaces/books";
import DeleteModal from "./modals/delete-modal";
import { toast } from "react-toastify";

export function EditButtonRenderer(
  params: param_interface,
  edOpen: boolean,
  setEdOpen: bool_state
) {
  const bookId = params.data._id;
  const handleBookEdit = () => {
    if (bookId) {
      axios.post(`http://localhost:8000/books}`).then(() => {
        //code for adding book to db data
        setEdOpen(false);
        toast("Book Deleted Successfully", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    }
  };
  return (
    <>
      <button
        style={{ width: 80 }}
        onClick={() => setEdOpen(!edOpen)}
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm uppercase py-2 font-semibold rounded shadow"
      >
        Edit
      </button>
    </>
  );
}

export function UpdatettonRenderer(
  params: param_interface,
  upOpen: boolean,
  setUpOpen: bool_state
) {
  const bookId = params.data._id;

  const handleBookUpdate = () => {
    if (bookId) {
      axios.put(`http://localhost:8000/books/${bookId}`).then(() => {
        //code for updating book into db
        setUpOpen(false);
        toast("Book Deleted Successfully", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    }
  };

  return (
    <>
      <button
        style={{ width: 80 }}
        onClick={() => setUpOpen(!upOpen)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-600  text-sm uppercase py-2 font-semibold rounded shadow"
      >
        Update
      </button>
    </>
  );
}

export function DeleteButtonRenderer(
  params: param_interface,
  deOpen: boolean,
  setDeOpen: bool_state
) {
  const bookId = params.data._id;
  const handleBookDelete = () => {
    if (bookId) {
      axios.delete(`http://localhost:8000/books/${bookId}`).then(() => {
        setDeOpen(false);
        toast("Book Deleted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
    }
  };

  return (
    <>
      <button
        style={{ width: 80 }}
        onClick={() => setDeOpen(!deOpen)}
        className="bg-red-500 hover:bg-red-600 text-sm uppercase  text-white py-2 font-semibold rounded shadow"
      >
        Delete
      </button>
      <DeleteModal
        showModal={deOpen}
        closeModal={setDeOpen}
        handleBookDelete={handleBookDelete}
      />
    </>
  );
}
