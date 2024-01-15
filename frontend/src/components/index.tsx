import { useState, useEffect } from "react";
import axios from "axios";
import { book_interface } from "../interfaces/books";
import BooksTable from "./table";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [books, setBooks] = useState<book_interface[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/books").then((response) => {
      setBooks(response.data.data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center mt-14">
      <BooksTable books={books} />
      <ToastContainer />
    </div>
  );
};

export default Home;
