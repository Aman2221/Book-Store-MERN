import axios from "axios";
import { book_data, bool_state, param_interface } from "../interfaces/books";
import DeleteModal from "./modals/delete-modal";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

export const customToast = (message: string) => {
  return toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

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
        customToast("Book Updated Successfully");
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
        customToast("Book Deleted Successfully");
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
  selected: book_data,
  setSelected: (a: book_data) => void,
  params: param_interface,
  deOpen: boolean,
  setDeOpen: bool_state
) {
  const { setBooks }: any = useContext(MyContext);
  const handleBookDelete = () => {
    axios.delete(`http://localhost:8000/books/${selected._id}`).then(() => {
      setDeOpen(false);
      customToast("Book Deleted Successfully");
      axios.get("http://localhost:8000/books").then((response) => {
        setBooks(response.data.data);
      });
    });
  };

  const handleDeleteClick = () => {
    setDeOpen(!deOpen);
    setSelected(params.node.data);
    console.log("params :", params.node.data);
  };

  return (
    <>
      <button
        style={{ width: 80 }}
        onClick={handleDeleteClick}
        className="bg-red-500 hover:bg-red-600 text-sm uppercase  text-white py-2 font-semibold rounded shadow"
      >
        Delete
      </button>
      <DeleteModal
        name={selected?.title}
        showModal={deOpen}
        closeModal={setDeOpen}
        handleBookDelete={handleBookDelete}
      />
    </>
  );
}

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
